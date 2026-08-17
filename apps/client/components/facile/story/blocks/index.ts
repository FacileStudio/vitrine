import type { ReactNode } from "react";
import type { BlockKind, BlockProps } from "../types";
import Cover from "./cover";
import Intro from "./intro";
import Note from "./note";
import Col from "./col";
import Tiles from "./tiles";
import Typography from "./typography";
import TypographyPair from "./typographyPair";
import Palette from "./palette";
import Big from "./big";
import Mosaic from "./mosaic";
import Collage from "./collage";
import Full from "./full";
import End from "./end";

// block kind -> renderer. A new block is a component, a row in BLOCK_SPECS and a
// line here; nothing else in the story has to know it exists.
export const BLOCKS: Record<BlockKind, (props: BlockProps) => ReactNode> = {
    cover: Cover,
    intro: Intro,
    note: Note,
    col: Col,
    tiles: Tiles,
    typography: Typography,
    typographyPair: TypographyPair,
    palette: Palette,
    big: Big,
    mosaic: Mosaic,
    collage: Collage,
    full: Full,
    end: End,
};
