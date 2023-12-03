import convert from "./convert";
// Transform
import hexToHsl from "./transform/hexToHsl";
import hslToHex from "./transform/hslToHex";

const lighten = (color: string, amount: number): string => {
  // Ensure the amount is valid (between 0 and 100)
  if (amount < 0 || amount > 100) {
    throw new Error("Lighten amount must be between 0 and 100.");
  }

  // Convert color to HSL representation
  const hsl = hexToHsl(convert(color, "hex"));
  const hue = hsl[0];
  const saturation = hsl[1];
  const lightness = hsl[2];

  // Calculate the lightening factor
  const lighteningFactor = 1 + amount / 100;

  // Apply lightening factor to lightness
  const lightenedLightness = Math.min(100, lightness * lighteningFactor);

  // Reconstruct and return the lightened color value
  return hslToHex(hue, saturation + "%", lightenedLightness + "%");
};

export default lighten;
