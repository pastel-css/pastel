import percentToFraction from "./percentToFraction";

const hslToRgb = (
  hue: number,
  saturation: number | string,
  lightness: number | string
): [number, number, number] => {
  const convertedSaturation = percentToFraction(saturation);
  const convertedLightness = percentToFraction(lightness);

  const chroma =
    (1 - Math.abs(2 * convertedLightness - 1)) * convertedSaturation;

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
      rgb = [secondaries, 0, chroma];
      break;
    case 5:
      rgb = [chroma, 0, secondaries];
      break;
    default:
      rgb = [secondaries, 0, chroma];
      break;
  }

  const lightnessAdjustment = convertedLightness - chroma / 2;
  return [
    Math.round((rgb[0] + lightnessAdjustment) * 255),
    Math.round((rgb[1] + lightnessAdjustment) * 255),
    Math.round((rgb[2] + lightnessAdjustment) * 255),
  ];
};

export default hslToRgb;
