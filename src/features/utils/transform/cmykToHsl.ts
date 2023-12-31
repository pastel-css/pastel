import cmykToRgb from "./cmykToRgb";
import rgbToHsl from "./rgbToHsl";

const cmykToHsl = (
  cyan: number | string,
  magenta: number | string,
  yellow: number | string,
  black: number | string
): [number, number, number] => {
  // Convert CMYK to RGB
  const rgb = cmykToRgb(cyan, magenta, yellow, black);

  // Convert RGB to HSL
  return rgbToHsl(rgb[0], rgb[1], rgb[2]);
};

export default cmykToHsl;
