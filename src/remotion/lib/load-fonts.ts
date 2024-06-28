import { loadFont } from "@remotion/fonts";
import { staticFile } from "remotion";

const loadFonts = (
  fonts?: Array<any>
) => {
  fonts = fonts ? fonts : [
    {
      family: "SF-Pro",
      url: "/fonts/SF-Pro.ttf",
      weights: ["500", "700", "800"]
    }
  ];

  fonts.forEach(({ family, url, weights }) => {
    weights.forEach((weight: string) => {
      loadFont({
        family,
        url: staticFile(url),
        weight
      });
    });
  });
}

export default loadFonts;