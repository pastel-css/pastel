import hslToRgb from "./hslToRgb";
import rgbToCmyk from "./rgbToCmyk";

const hslToCmyk = (
  hue: number,
  saturation: number,
  lightness: number
): [number, number, number, number] => {
  // Convert HSL to RGB
  const rgb = hslToRgb(hue, saturation, lightness);

  // Convert RGB to CMYK
  return rgbToCmyk(rgb[0], rgb[1], rgb[2]);
};

export default hslToCmyk;
