import convert from "./convert";
// Transform
import hexToRgb from "./transform/hexToRgb";
import rgbToHex from "./transform/rgbToHex";
import saturate from "./saturate";

const shade = (color: string, amount: number): string => {
  // Check if the amount is valid (between 0 and 100)
  if (amount < 0 || amount > 100) {
    throw new Error("Shade amount must be between 0 and 100.");
  }

  // Convert hex color to RGB
  const rgb = hexToRgb(convert(color, "hex"));

  // Calculate the darkening factor
  const darkeningFactor = 1 - amount / 100;

  // Apply darkening factor to each color component
  const darkenedRed = Math.max(0, Math.floor(rgb[0] * darkeningFactor));
  const darkenedGreen = Math.max(0, Math.floor(rgb[1] * darkeningFactor));
  const darkenedBlue = Math.max(0, Math.floor(rgb[2] * darkeningFactor));

  // Saturate the darkened color to maintain vibrancy
  const darkenedColor = rgbToHex(darkenedRed, darkenedGreen, darkenedBlue);
  const saturatedColor = saturate(darkenedColor, 0.5); // Adjust saturation to compensate for darkening

  return saturatedColor;
};

export default shade;
