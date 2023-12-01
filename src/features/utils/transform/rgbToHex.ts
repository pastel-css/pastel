// Function to convert RGB components to hex format
const rgbToHex = (red: number, green: number, blue: number): string => {
  const hexRed = red.toString(16).padStart(2, "0");
  const hexGreen = green.toString(16).padStart(2, "0");
  const hexBlue = blue.toString(16).padStart(2, "0");

  return `#${hexRed}${hexGreen}${hexBlue}`;
};

export default rgbToHex;
