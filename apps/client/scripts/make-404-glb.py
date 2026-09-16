"""
Builds public/models/404.glb: "404" set in Goga Medium, extruded, with a small bevel.
Sized and oriented like F.glb (upright, facing +Z, glyphs about 0.09 tall and 0.042
deep) so DitherView props tuned for the F carry over. Run from apps/client:

    blender -b --factory-startup -P scripts/make-404-glb.py
"""

import math
import os

import bpy

FONT = "public/fonts/goga/GogaTest-Medium-BF6646d5d84754e.otf"
OUT = "public/models/404.glb"
TEXT = "404"

HEIGHT = 0.09  # digit height, matching the F
DEPTH = 0.042
BEVEL = 0.0025

bpy.ops.wm.read_factory_settings(use_empty=True)

curve = bpy.data.curves.new(TEXT, "FONT")
curve.body = TEXT
curve.font = bpy.data.fonts.load(os.path.abspath(FONT))
curve.size = HEIGHT / 0.7  # Goga digits are 700 units tall on a 1000 unit em
curve.align_x = "CENTER"
curve.align_y = "CENTER"
# the bevel grows the outline outward, so pull the extrusion in by the same amount
curve.extrude = DEPTH / 2 - BEVEL
curve.bevel_depth = BEVEL
curve.bevel_resolution = 3
curve.offset = -BEVEL
curve.resolution_u = 8

text = bpy.data.objects.new(TEXT, curve)
bpy.context.scene.collection.objects.link(text)
# Blender text lies in XY facing +Z; stand it up so the Y-up export faces the camera
text.rotation_euler = (math.radians(90), 0, 0)

material = bpy.data.materials.new("404Mat")
bsdf = material.node_tree.nodes["Principled BSDF"]
bsdf.inputs["Base Color"].default_value = (0.434, 0.434, 0.434, 1)
bsdf.inputs["Roughness"].default_value = 0.15
# F.glb omits metallicFactor, which glTF reads as 1; the dither lives on the reflections
bsdf.inputs["Metallic"].default_value = 1.0
curve.materials.append(material)

bpy.context.view_layer.objects.active = text
text.select_set(True)
bpy.ops.object.convert(target="MESH")
bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
bpy.ops.object.shade_smooth_by_angle(angle=math.radians(30))

bpy.ops.export_scene.gltf(
    filepath=os.path.abspath(OUT),
    export_format="GLB",
    use_selection=True,
    export_apply=True,
    export_yup=True,
    export_texcoords=False,
)
print(f"wrote {OUT}, dimensions {tuple(round(d, 4) for d in text.dimensions)}")
