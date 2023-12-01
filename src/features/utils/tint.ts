import convert from "./convert";
// Transform
import hexToRgb from "./transform/hexToRgb";
import rgbToHex from "./transform/rgbToHex";
import saturate from "./saturate";

const tint = (color: string, amount: number): string => {
  // Check if the amount is valid (between 0 and 100)
  if (amount < 0 || amount > 100) {
    throw new Error("Tint amount must be between 0 and 100.");
  }

  // Convert hex color to RGB
  const rgb = hexToRgb(convert(color, "hex"));

  // Calculate the lightening factor
  const lighteningFactor = 1 + amount / 100;

  // Apply lightening factor to each color component
  const lightenedRed = Math.min(255, Math.round(rgb[0] * lighteningFactor));
  const lightenedGreen = Math.min(255, Math.round(rgb[1] * lighteningFactor));
  const lightenedBlue = Math.min(255, Math.round(rgb[2] * lighteningFactor));

  // Saturate the lightened color to maintain vibrancy
  const lightenedColor = rgbToHex(lightenedRed, lightenedGreen, lightenedBlue);
  const saturatedColor = saturate(lightenedColor, 0.5); // Adjust saturation to compensate for lightening

  return saturatedColor;
};

export default tint;
