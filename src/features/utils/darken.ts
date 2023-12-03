import convert from "./convert";
// Transform
import hexToHsl from "./transform/hexToHsl";
import hslToHex from "./transform/hslToHex";

const darken = (color: string, amount: number): string => {
  // Ensure the amount is valid (between 0 and 100)
  if (amount < 0 || amount > 100) {
    throw new Error("Darken amount must be between 0 and 100.");
  }

  // Extract color components (R, G, B)
  const hsl = hexToHsl(convert(color, "hex"));
  const hue = hsl[0];
  const saturation = hsl[1];
  const lightness = hsl[2];

  // Calculate the darkening factor
  const darkeningFactor = 1 - amount / 100;

  // Apply darkening factor to lightness
  const darkenedLightness = Math.max(0, lightness * darkeningFactor);

  // Reconstruct and return the darkened color value
  return hslToHex(hue, saturation + "%", darkenedLightness + "%");
};

export default darken;
