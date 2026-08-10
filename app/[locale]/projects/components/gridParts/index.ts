import type { ReactNode } from "react";
import type { BlockKind, PartProps } from "../../lib/story";
import Cover from "./Cover";
import Intro from "./Intro";
import Note from "./Note";
import Col from "./Col";
import Typography from "./Typography";
import Palette from "./Palette";
import Big from "./Big";
import Mosaic from "./Mosaic";
import Full from "./Full";
import End from "./End";

// block kind -> renderer. A new part is a component, a row in BLOCK_SPECS and a
// line here; nothing else in the detail view has to know it exists.
export const PARTS: Record<BlockKind, (props: PartProps) => ReactNode> = {
    cover: Cover,
    intro: Intro,
    note: Note,
    col: Col,
    typography: Typography,
    palette: Palette,
    big: Big,
    mosaic: Mosaic,
    full: Full,
    end: End,
};
