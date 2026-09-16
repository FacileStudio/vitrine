"""
Adds accented Latin letters to the Goga trial fonts, which ship with only A-Z, a-z,
digits and a few punctuation marks. Each accented letter is drawn as its base letter
plus a flat bar: above for acute, grave, circumflex, diaeresis, tilde and the like,
below for cedilla and ogonek. The page keeps the real character, so copy-paste,
search and screen readers are unaffected.

The bar takes the hyphen's thickness and sits where the dot of the i sits, so it
follows each weight. Accented letters copy their base letter's kerning.

Run from apps/client, with fonttools and brotli installed:

    python3 scripts/accent-goga.py

Letters already present in a font are skipped, so a second run changes nothing. To
change the bar, restore the fonts first: git checkout public/fonts/goga
"""

import glob
import unicodedata

from fontTools.agl import UV2AGL
from fontTools.pens.boundsPen import BoundsPen
from fontTools.pens.recordingPen import RecordingPen
from fontTools.pens.t2CharStringPen import T2CharStringPen
from fontTools.ttLib import TTFont

FONTS = "public/fonts/goga/*.otf"

# Latin-1 Supplement and Latin Extended-A: every letter French, Spanish and German need
CODEPOINTS = range(0xC0, 0x180)

# combining classes that attach under the letter (cedilla, ogonek, dot below)
BELOW = {202, 220}


def glyph_name(uv):
    return UV2AGL.get(uv, f"uni{uv:04X}")


def bounds(glyph_set, name):
    pen = BoundsPen(glyph_set)
    glyph_set[name].draw(pen)
    return pen.bounds


def contours(glyph_set, name):
    """The glyph's outline split into one command list per contour."""
    pen = RecordingPen()
    glyph_set[name].draw(pen)
    out, current = [], []
    for command in pen.value:
        current.append(command)
        if command[0] in ("closePath", "endPath"):
            out.append(current)
            current = []
    return out


def contour_bottom(contour):
    return min(y for _, points in contour for _, y in points)


def accented_letters(cmap):
    """Maps each missing accented codepoint to (base glyph, has mark above, has mark below)."""
    letters = {}
    for uv in CODEPOINTS:
        if uv in cmap:
            continue
        base, *marks = unicodedata.normalize("NFD", chr(uv))
        if not marks or not base.isascii() or not base.isalpha() or ord(base) not in cmap:
            continue
        if not all(unicodedata.combining(m) for m in marks):
            continue
        below = any(unicodedata.combining(m) in BELOW for m in marks)
        above = any(unicodedata.combining(m) not in BELOW for m in marks)
        letters[uv] = (cmap[ord(base)], above, below)
    return letters


def bar_metrics(font):
    """Bar thickness and length from the hyphen, height offset from the dot of the i."""
    glyph_set = font.getGlyphSet()
    cmap = font.getBestCmap()
    x0, y0, x1, y1 = bounds(glyph_set, cmap[ord("-")])
    dot = max(contours(glyph_set, cmap[ord("i")]), key=contour_bottom)
    dot_pen = BoundsPen(glyph_set)
    for command, points in dot:
        getattr(dot_pen, command)(*points)
    _, dot_bottom, _, dot_top = dot_pen.bounds
    x_height = font["OS/2"].sxHeight
    # distance from the top of a lowercase stem to the middle of the dot
    rise = (dot_bottom + dot_top) / 2 - x_height
    return y1 - y0, x1 - x0, rise, x_height, font["OS/2"].sCapHeight


def draw_bar(pen, center_x, center_y, length, thickness):
    left, right = center_x - length / 2, center_x + length / 2
    bottom, top = center_y - thickness / 2, center_y + thickness / 2
    # counter-clockwise, the outer direction in CFF outlines
    pen.moveTo((left, bottom))
    pen.lineTo((right, bottom))
    pen.lineTo((right, top))
    pen.lineTo((left, top))
    pen.closePath()


def build_glyph(font, base, above, below, metrics):
    thickness, hyphen, rise, x_height, cap_height = metrics
    glyph_set = font.getGlyphSet()
    x0, _, x1, _ = bounds(glyph_set, base)
    width = font["hmtx"][base][0]
    uppercase = base[0].isupper()

    # CFF stores width as a delta from nominalWidthX; browsers read it over hmtx
    top_dict = font["CFF "].cff.topDictIndex[0]
    pen = T2CharStringPen(width - top_dict.Private.nominalWidthX, glyph_set)
    for contour in contours(glyph_set, base):
        # a bar replaces the dot of i and j instead of stacking on top of it
        if above and base in ("i", "j") and contour_bottom(contour) >= x_height:
            continue
        for command, points in contour:
            getattr(pen, command)(*points)

    length = min(max((x1 - x0) * 0.6, hyphen * 0.5), hyphen * 0.8)
    center = (x0 + x1) / 2
    if above:
        # capitals get a tighter gap, or the bar drifts toward the line above
        draw_bar(pen, center, cap_height + rise * 0.8 if uppercase else x_height + rise, length, thickness)
    if below:
        draw_bar(pen, center, -rise + thickness / 2, length, thickness)

    return pen.getCharString(private=top_dict.Private, globalSubrs=font["CFF "].cff.GlobalSubrs), width


def add_glyph(font, name, charstring, width):
    cff = font["CFF "].cff
    top_dict = cff.topDictIndex[0]
    char_strings = top_dict.CharStrings
    char_strings.charStringsIndex.append(charstring)
    char_strings.charStrings[name] = len(char_strings.charStringsIndex) - 1
    # the CFF charset is the font's glyph order list itself, so one append covers both
    top_dict.charset.append(name)
    assert font.getGlyphOrder()[-1] == name

    pen = BoundsPen(font.getGlyphSet())
    charstring.draw(pen)
    font["hmtx"][name] = (width, round(pen.bounds[0]))


def copy_kerning(font, pairs):
    """Gives every new glyph the kerning of its base, as first and as second glyph."""
    for lookup in font["GPOS"].table.LookupList.Lookup:
        for sub in lookup.SubTable:
            if sub.Format == 1:
                for glyph, base in pairs:
                    if base in sub.Coverage.glyphs:
                        source = sub.PairSet[sub.Coverage.glyphs.index(base)]
                        clone = type(source)()
                        clone.PairValueRecord = list(source.PairValueRecord)
                        clone.PairValueCount = len(clone.PairValueRecord)
                        sub.Coverage.glyphs.append(glyph)
                        sub.PairSet.append(clone)
                for pair_set in sub.PairSet:
                    records = pair_set.PairValueRecord
                    for glyph, base in pairs:
                        for record in [r for r in records if r.SecondGlyph == base]:
                            copy = type(record)()
                            copy.__dict__.update(record.__dict__)
                            copy.SecondGlyph = glyph
                            records.append(copy)
                    records.sort(key=lambda r: font.getGlyphID(r.SecondGlyph))
                    pair_set.PairValueCount = len(records)
                sub.PairSetCount = len(sub.PairSet)
            elif sub.Format == 2:
                for glyph, base in pairs:
                    if base in sub.Coverage.glyphs:
                        sub.Coverage.glyphs.append(glyph)
                    for class_def in (sub.ClassDef1, sub.ClassDef2):
                        if base in class_def.classDefs:
                            class_def.classDefs[glyph] = class_def.classDefs[base]

    glyph_classes = font["GDEF"].table.GlyphClassDef.classDefs
    for glyph, base in pairs:
        if base in glyph_classes:
            glyph_classes[glyph] = glyph_classes[base]


def patch(path):
    font = TTFont(path)
    cmap = font.getBestCmap()
    letters = accented_letters(cmap)
    if not letters:
        print(f"{path}: nothing to add")
        return

    metrics = bar_metrics(font)
    pairs = []
    for uv, (base, above, below) in sorted(letters.items()):
        name = glyph_name(uv)
        charstring, width = build_glyph(font, base, above, below, metrics)
        add_glyph(font, name, charstring, width)
        for table in font["cmap"].tables:
            if table.isUnicode():
                table.cmap[uv] = name
        pairs.append((name, base))

    copy_kerning(font, pairs)
    font.save(path)
    font.flavor = "woff2"
    font.save(path.removesuffix(".otf") + ".woff2")
    print(f"{path}: added {''.join(chr(uv) for uv in sorted(letters))}")


if __name__ == "__main__":
    for path in sorted(glob.glob(FONTS)):
        patch(path)
