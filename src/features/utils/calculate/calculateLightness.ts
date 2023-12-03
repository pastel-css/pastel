// Calculate lightness from RGB components
const calculateLightness = (
  red: number,
  green: number,
  blue: number
): number => {
  const normalizedRed = red / 255;
  const normalizedGreen = green / 255;
  const normalizedBlue = blue / 255;

  const max = Math.max(normalizedRed, normalizedGreen, normalizedBlue);
  const min = Math.min(normalizedRed, normalizedGreen, normalizedBlue);

  return (max + min) / 2;
};

export default calculateLightness;
