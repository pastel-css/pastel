import convert from "./convert";
// Tranform
import hexToHsl from "./transform/hexToHsl";
import hslToHex from "./transform/hslToHex";

const desaturate = (color: string, amount: number): string => {
  // Ensure the amount is valid (between 0 and 100)
  if (amount < 0 || amount > 100) {
    throw new Error("Desaturation amount must be between 0 and 100.");
  }

  // Convert color to HSL representation
  const hsl = hexToHsl(convert(color, "hex"));
  const hue = hsl[0];
  const saturation = hsl[1];
  const lightness = hsl[2];

  // Calculate the desaturation factor
  const desaturationFactor = 1 - amount / 100;

  // Apply desaturation factor to saturation
  const desaturatedSaturation = Math.max(0, saturation * desaturationFactor);

  // Convert desaturated HSL representation back to RGB
  const desaturatedColor = hslToHex(
    hue,
    desaturatedSaturation + "%",
    lightness + "%"
  );

  return desaturatedColor;
};

export default desaturate;
