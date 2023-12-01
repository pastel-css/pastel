import convert from "./convert";
// Transform
import hexToHsl from "./transform/hexToHsl";
import hslToRgb from "./transform/hslToRgb";
import rgbToHex from "./transform/rgbToHex";

const hue = (color: string, hueDelta: number): string => {
  const hsl = hexToHsl(convert(color, "hex"));

  // Adjust the hue value by the hue delta
  const adjustedHue = (hsl[0] + hueDelta) % 360;

  const rgb = hslToRgb(adjustedHue, hsl[1], hsl[2]);

  // Convert the adjusted HSL values back to hex
  const adjustedColor = rgbToHex(rgb[0], rgb[1], rgb[2]);

  return adjustedColor;
};

export default hue;
