const hslToRgb = (
  hue: number,
  saturation: number,
  lightness: number
): [number, number, number] => {
  if (hue < 0 || hue > 360) {
    throw new Error("Invalid hue value: " + hue);
  }

  if (saturation < 0 || saturation > 1) {
    throw new Error("Invalid saturation value: " + saturation);
  }

  if (lightness < 0 || lightness > 1) {
    throw new Error("Invalid lightness value: " + lightness);
  }

  const chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  const h = hue / 60;
  const secondaries = chroma * (1 - Math.abs((h % 2) - 1));

  let rgb: [number, number, number];
  switch (Math.floor(h)) {
    case 0:
      rgb = [chroma, secondaries, 0];
      break;
    case 1:
      rgb = [secondaries, chroma, 0];
      break;
    case 2:
      rgb = [0, chroma, secondaries];
      break;
    case 3:
      rgb = [0, secondaries, chroma];
      break;
    case 4:
      rgb = [chroma, 0, secondaries];
      break;
    default:
      rgb = [secondaries, 0, chroma];
      break;
  }

  const lightnessAdjustment = lightness * (1 - chroma);
  return [
    (rgb[0] + lightnessAdjustment) * 255,
    (rgb[1] + lightnessAdjustment) * 255,
    (rgb[2] + lightnessAdjustment) * 255,
  ];
};

export default hslToRgb;
