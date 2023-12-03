import convert from "./convert";
// Transform
import hexToHsl from "./transform/hexToHsl";
import hslToHex from "./transform/hslToHex";

const hue = (color: string, hueDelta: number): string => {
  const hsl = hexToHsl(convert(color, "hex"));

  // Adjust the hue value by the hue delta
  const adjustedHue = (hsl[0] + hueDelta) % 360;

  const adjustedColor = hslToHex(adjustedHue, hsl[1] + "%", hsl[2] + "%");

  return adjustedColor;
};

export default hue;
