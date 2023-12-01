// Calculate
import calculateCyan from "../calculate/calculateCyan";
import calculateMagenta from "../calculate/calculateMagenta";
import calculateYellow from "../calculate/calculateYellow";

// Function to convert RGB components to CMYK format
const rgbToCmyk = (
  red: number,
  green: number,
  blue: number
): [number, number, number, number] => {
  const cyan = calculateCyan(red);
  const magenta = calculateMagenta(green);
  const yellow = calculateYellow(blue);
  const black = 1 - Math.max(cyan, magenta, yellow);

  return [cyan * 100, magenta * 100, yellow * 100, black * 100];
};

export default rgbToCmyk;
