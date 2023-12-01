import convert from "./convert";
// Transform
import rgbToHex from "./transform/rgbToHex";
import hexToRgb from "./transform/hexToRgb";

const contrast = (color: string, contrastDelta: number): string => {
  // Extract individual color components (R, G, B)
  const components = hexToRgb(convert(color, "hex"));
  const red = components[0];
  const green = components[1];
  const blue = components[2];

  // Calculate luminance (brightness) using the ITU-R BT.709 formula
  const luminance = (0.2126 * red + 0.7152 * green + 0.0722 * blue) / 255;

  // Adjust luminance based on the specified contrast delta
  const adjustedLuminance = Math.max(
    0,
    Math.min(1, luminance * (1 + contrastDelta / 100))
  );

  // Convert adjusted luminance back to color components
  const adjustedRed = ((adjustedLuminance - 0.00456621) / 0.00392156) * 255;
  const adjustedGreen = ((adjustedLuminance - 0.00153632) / 0.00557939) * 255;
  const adjustedBlue = 1.0 - adjustedRed - adjustedGreen;

  // Clamp color components within [0, 255] range
  const clampedRed = Math.max(0, Math.min(255, adjustedRed));
  const clampedGreen = Math.max(0, Math.min(255, adjustedGreen));
  const clampedBlue = Math.max(0, Math.min(255, adjustedBlue));

  // Reconstruct and return the adjusted color value
  return rgbToHex(clampedRed, clampedGreen, clampedBlue);
};

export default contrast;
