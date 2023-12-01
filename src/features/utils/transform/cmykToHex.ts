import cmykToRgb from "./cmykToRgb";
import rgbToHex from "./rgbToHex";

const cmykToHex = (
  cyan: number,
  magenta: number,
  yellow: number,
  black: number
): string => {
  // Convert CMYK to RGB
  const rgb = cmykToRgb(cyan, magenta, yellow, black);

  // Convert RGB to hex
  return rgbToHex(rgb[0], rgb[1], rgb[2]);
};

export default cmykToHex;
