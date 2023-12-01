import convert from "./convert";
// Transform
import hexToRgb from "./transform/hexToRgb";
import rgbToHex from "./transform/rgbToHex";

const invert = (color: string): string => {
  const rgb = hexToRgb(convert(color, "hex"));

  // Invert the RGB components
  const invertedRgb = [255 - rgb[0], 255 - rgb[1], 255 - rgb[2]];

  // Convert the inverted RGB values back to hex
  const invertedColor = rgbToHex(
    invertedRgb[0],
    invertedRgb[1],
    invertedRgb[2]
  );

  return invertedColor;
};

export default invert;
