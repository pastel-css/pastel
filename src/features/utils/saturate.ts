import convert from "./convert";

// Transform
import hexToHsl from "./transform/hexToHsl";
import hslToHex from "./transform/hslToHex";

const saturate = (color: string, amount: number): string => {
  // Ensure the amount is valid (between 0 and 100)
  if (amount < 0 || amount > 100) {
    throw new Error("Desaturation amount must be between 0 and 100.");
  }

  // Convert color to HSL representation
  const hsl = hexToHsl(convert(color, "hex"));

  const hue = hsl[0];
  const saturation = hsl[1];
  const lightness = hsl[2];

  // Calculate the saturation factor
  const saturationFactor = 1 + amount / 100;

  // Apply saturation factor to saturation
  const saturatedSaturation = Math.min(100, saturation * saturationFactor);

  // Convert saturated HSL representation back to HEX
  const saturatedColor = hslToHex(
    hue,
    saturatedSaturation + "%",
    lightness + "%"
  );

  return saturatedColor;
};

export default saturate;
