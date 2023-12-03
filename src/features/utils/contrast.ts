import convert from "./convert";
import hexToRgb from "./transform/hexToRgb";
import rgbToHex from "./transform/rgbToHex";

const contrast = (color: string, delta: number): string => {
  // Extract individual color components (R, G, B)
  const components = hexToRgb(convert(color, "hex"));
  const red = components[0];
  const green = components[1];
  const blue = components[2];

  const convertedDelta = (delta / 100) * 510 - 255;

  const factor =
    (259 * (convertedDelta + 255)) / (255 * (259 - convertedDelta));

  // Adjust color components based on the new luminance
  const adjustedRed = Math.round(factor * (red - 128) + 128);
  const adjustedGreen = Math.round(factor * (green - 128) + 128);
  const adjustedBlue = Math.round(factor * (blue - 128) + 128);

  const clampedRed = Math.max(0, Math.min(255, adjustedRed));
  const clampedGreen = Math.max(0, Math.min(255, adjustedGreen));
  const clampedBlue = Math.max(0, Math.min(255, adjustedBlue));

  // Reconstruct and return the adjusted color value
  return rgbToHex(clampedRed, clampedGreen, clampedBlue);
};

export default contrast;
