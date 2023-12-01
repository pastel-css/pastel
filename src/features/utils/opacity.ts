import convert from "./convert";
// Transform
import hexToRgb from "./transform/hexToRgb";

const opacity = (color: string, opacity: number): string => {
  // Convert hex color to RGB
  const rgb = hexToRgb(convert(color, "hex"));

  return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
};

export default opacity;
