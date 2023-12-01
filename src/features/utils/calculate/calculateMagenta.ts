// Calculate magenta from green
const calculateMagenta = (green: number): number => {
  return 1 - green / 255;
};

export default calculateMagenta;
