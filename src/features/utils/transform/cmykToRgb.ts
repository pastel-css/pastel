import percentToFraction from "./percentToFraction";

const cmykToRgb = (
  cyan: number | string,
  magenta: number | string,
  yellow: number | string,
  black: number | string
): [number, number, number] => {
  const convertedCyan = percentToFraction(cyan);

  const convertedMagenta = percentToFraction(magenta);

  const convertedYellow = percentToFraction(yellow);

  const convertedBlack = percentToFraction(black);

  const red = Math.round(255 * (1 - convertedCyan) * (1 - convertedBlack));
  const green = Math.round(255 * (1 - convertedMagenta) * (1 - convertedBlack));
  const blue = Math.round(255 * (1 - convertedYellow) * (1 - convertedBlack));

  return [red, green, blue];
};

export default cmykToRgb;
