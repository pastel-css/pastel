import convert from "./convert";
// Transform
import hexToRgb from "./transform/hexToCmyk";
import rgbToHex from "./transform/rgbToHex";

const darken = (color: string, amount: number): string => {
  // Ensure the amount is valid (between 0 and 100)
  if (amount < 0 || amount > 100) {
    throw new Error("Darken amount must be between 0 and 100.");
  }

  // Extract color components (R, G, B)
  const components = hexToRgb(convert(color, "hex"));
  const red = components[0];
  const green = components[1];
  const blue = components[2];

  // Calculate the darkening factor
  const darkeningFactor = 1 - amount / 100;

  // Apply darkening factor to each color component
  const darkenedRed = Math.max(0, Math.floor(red * darkeningFactor));
  const darkenedGreen = Math.max(0, Math.floor(green * darkeningFactor));
  const darkenedBlue = Math.max(0, Math.floor(blue * darkeningFactor));

  // Reconstruct and return the darkened color value
  return rgbToHex(darkenedRed, darkenedGreen, darkenedBlue);
};

export default darken;
