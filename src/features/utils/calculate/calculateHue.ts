// Calculate hue from RGB components
const calculateHue = (red: number, green: number, blue: number): number => {
  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);
  const delta = max - min;

  let hue: number = 1;

  if (max === red) {
    hue = (green - blue) / delta;
  } else if (max === green) {
    hue = 2.0 + (blue - red) / delta;
  } else if (max === blue) {
    hue = 4.0 + (red - green) / delta;
  }

  hue *= 60;

  if (hue < 0) {
    hue += 360;
  }

  return hue;
};

export default calculateHue;
