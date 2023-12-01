const cmykToRgb = (
  cyan: number,
  magenta: number,
  yellow: number,
  black: number
): [number, number, number] => {
  if (cyan < 0 || cyan > 1) {
    throw new Error("Invalid cyan value: " + cyan);
  }

  if (magenta < 0 || magenta > 1) {
    throw new Error("Invalid magenta value: " + magenta);
  }

  if (yellow < 0 || yellow > 1) {
    throw new Error("Invalid yellow value: " + yellow);
  }

  if (black < 0 || black > 1) {
    throw new Error("Invalid black value: " + black);
  }

  const red = 255 * (1 - cyan) * (1 - black);
  const green = 255 * (1 - magenta) * (1 - black);
  const blue = 255 * (1 - yellow) * (1 - black);

  return [red, green, blue];
};

export default cmykToRgb;
