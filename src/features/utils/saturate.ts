import convert from "./convert";

// Transform
import hexToRgb from "./transform/hexToRgb";
import rgbToHex from "./transform/rgbToHex";

const saturate = (color: string, amount: number): string => {
  // Check if the amount is valid (between 0 and 1)
  if (amount < 0 || amount > 1) {
    throw new Error("Saturate amount must be between 0 and 1.");
  }

  // Convert color to RGB
  const rgb = hexToRgb(convert(color, "hex"));

  // Calculate the difference between the highest and lowest RGB values
  const chroma =
    Math.max(rgb[0], rgb[1], rgb[2]) - Math.min(rgb[0], rgb[1], rgb[2]);

  // Adjust the chroma towards the maximum possible value
  const adjustedChroma = Math.min(chroma + (255 - chroma) * amount, 255);

  // Calculate the new RGB values based on the adjusted chroma
  const average = (rgb[0] + rgb[1] + rgb[2]) / 3;
  const adjustedRed = average + ((rgb[0] - average) * adjustedChroma) / chroma;
  const adjustedGreen =
    average + ((rgb[1] - average) * adjustedChroma) / chroma;
  const adjustedBlue = average + ((rgb[2] - average) * adjustedChroma) / chroma;

  // Convert the adjusted RGB values back to hex
  const saturatedColor = rgbToHex(adjustedRed, adjustedGreen, adjustedBlue);

  return saturatedColor;
};

export default saturate;
