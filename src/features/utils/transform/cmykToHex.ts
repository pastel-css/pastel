import cmykToRgb from "./cmykToRgb";
import rgbToHex from "./rgbToHex";

const cmykToHex = (
  cyan: number | string,
  magenta: number | string,
  yellow: number | string,
  black: number | string
): string => {
  // Convert CMYK to RGB
  const rgb = cmykToRgb(cyan, magenta, yellow, black);

  // Convert RGB to hex
  return rgbToHex(rgb[0], rgb[1], rgb[2]);
};

export default cmykToHex;
