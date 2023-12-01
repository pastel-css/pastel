// Calculate lightness from RGB components
const calculateLightness = (
  red: number,
  green: number,
  blue: number
): number => {
  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);

  return (max + min) / 2;
};

export default calculateLightness;
