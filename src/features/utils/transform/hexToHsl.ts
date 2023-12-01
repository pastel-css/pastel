import hexToRgb from "./hexToRgb";
import rgbToHsl from "./rgbToHsl";

const hexToHsl = (color: string): [number, number, number] => {
  // Convert hex to RGB
  const rgb = hexToRgb(color);

  // Convert RGB to HSL
  const hsl = rgbToHsl(rgb[0], rgb[1], rgb[2]);
  return hsl;
};

export default hexToHsl;
