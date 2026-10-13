import { addCollection } from 'iconify-icon';
import iconoir from './iconoir.json';

// the routes draw through <iconify-icon>, so their glyphs are bundled at stroke 2 rather than fetched at 1.5
addCollection(iconoir);
