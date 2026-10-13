import { addCollection } from "@iconify/react";
import iconoir from "./iconoir.json";

// bundled at stroke 2 so chips render on the first paint instead of fetching Iconoir's 1.5 from the api
addCollection(iconoir);
