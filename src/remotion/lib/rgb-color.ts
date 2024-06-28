import * as z from "zod";

import { RGBColorSchema } from "../schemas/color";

interface RgbColorProps extends z.infer<typeof RGBColorSchema> {
  opacity?: number;
}

const rgbColor = ({
  r,
  g,
  b,
  opacity
}: RgbColorProps) => {
  if (opacity) {
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }

  return `rgb(${r}, ${g}, ${b})`;
}

export default rgbColor;