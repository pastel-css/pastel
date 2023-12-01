import hexToRgb from "./hexToRgb";
import rgbToCmyk from "./rgbToCmyk";

const hexToCmyk = (color: string): [number, number, number, number] => {
  // Convert hex to RGB
  const rgb = hexToRgb(color);

  // Convert RGB to CMYK
  const cmyk = rgbToCmyk(rgb[0], rgb[1], rgb[2]);
  return cmyk;
};

export default hexToCmyk;
