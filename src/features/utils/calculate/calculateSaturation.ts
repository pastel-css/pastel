// Calculate saturation from RGB components
const calculateSaturation = (
  red: number,
  green: number,
  blue: number
): number => {
  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);
  const chroma = max - min;

  if (max === 0) {
    return 0;
  }

  return chroma / max;
};

export default calculateSaturation;
