import convert from "./convert";
// Transform
import hexToRgb from "./transform/hexToCmyk";
import rgbToHex from "./transform/rgbToHex";

const lighten = (color: string, amount: number): string => {
  // Ensure the amount is valid (between 0 and 100)
  if (amount < 0 || amount > 100) {
    throw new Error("Lighten amount must be between 0 and 100.");
  }

  // Extract color components (R, G, B)
  const components = hexToRgb(convert(color, "hex"));
  const red = components[0];
  const green = components[1];
  const blue = components[2];

  // Calculate the lightening factor
  const lighteningFactor = 1 + amount / 100;

  // Apply lightening factor to each color component
  const lightenedRed = Math.min(255, Math.round(red * lighteningFactor));
  const lightenedGreen = Math.min(255, Math.round(green * lighteningFactor));
  const lightenedBlue = Math.min(255, Math.round(blue * lighteningFactor));

  // Reconstruct and return the lightened color value
  return rgbToHex(lightenedRed, lightenedGreen, lightenedBlue);
};

export default lighten;
