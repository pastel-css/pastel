import convert from "./convert";
// Transform
import hexToRgb from "./transform/hexToRgb";
import rgbToHex from "./transform/rgbToHex";

const desaturate = (color: string, amount: number): string => {
  // Convert color to RGB
  const rgb = hexToRgb(convert(color, "hex"));

  // Calculate the average of the red, green, and blue values
  const average = (rgb[0] + rgb[1] + rgb[2]) / 3;

  // Adjust the red, green, and blue values towards the average
  const adjustedRed = Math.min(255, rgb[0] + (average - rgb[0]) * amount);
  const adjustedGreen = Math.min(255, rgb[1] + (average - rgb[1]) * amount);
  const adjustedBlue = Math.min(255, rgb[2] + (average - rgb[2]) * amount);

  // Convert the adjusted RGB values back to hex
  const desaturatedColor = rgbToHex(adjustedRed, adjustedGreen, adjustedBlue);

  return desaturatedColor;
};

export default desaturate;
