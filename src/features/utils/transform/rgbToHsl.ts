// Calculate
import calculateHue from "../calculate/calculateHue";
import calculateSaturation from "../calculate/calculateSaturation";
import calculateLightness from "../calculate/calculateLightness";

// Function to convert RGB components to HSL format
const rgbToHsl = (
  red: number,
  green: number,
  blue: number
): [number, number, number] => {
  const hue = calculateHue(red, green, blue);
  const saturation = calculateSaturation(red, green, blue);
  const lightness = calculateLightness(red, green, blue);

  return [hue, saturation * 100, lightness * 100];
};

export default rgbToHsl;
