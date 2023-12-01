import hslToRgb from "./hslToRgb";
import rgbToHex from "./rgbToHex";

const hslToHex = (
  hue: number,
  saturation: number,
  lightness: number
): string => {
  // Convert HSL to RGB
  const rgb = hslToRgb(hue, saturation, lightness);

  // Convert RGB to hex
  return rgbToHex(rgb[0], rgb[1], rgb[2]);
};

export default hslToHex;
