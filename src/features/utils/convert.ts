import rgbToCmyk from "./transform/rgbToCmyk";
import rgbToHex from "./transform/rgbToHex";
import rgbToHsl from "./transform/rgbToHsl";
import cmykToRgb from "./transform/cmykToRgb";
import cmykToHex from "./transform/cmykToHex";
import cmykToHsl from "./transform/cmykToHsl";
import hslToRgb from "./transform/hslToRgb";
import hslToHex from "./transform/hslToHex";
import hslToCmyk from "./transform/hslToCmyk";
import hexToRgb from "./transform/hexToRgb";
import hexToHsl from "./transform/hexToHsl";
import hexToCmyk from "./transform/hexToCmyk";
// Helper
import strip from "../../utility/strip";

const isValidColorFormat = (format: string): boolean => {
  return ["hex", "rgb", "hsl", "cmyk"].includes(format);
};

const convert = (
  color: string,
  format: "hex" | "rgb" | "hsl" | "cmyk"
): string => {
  // Validate input formats
  if (!isValidColorFormat(format)) {
    throw new Error(`Invalid target format: ${format}`);
  }

  if (color.startsWith("rgb") || color.startsWith("rgba")) {
    const match: any = /rgb(a?)?\(([^,]+),([^,]+),([^,]+)\)/.exec(color);

    const parsed = [
      parseFloat(match[2]),
      parseFloat(match[3]),
      parseFloat(match[4]),
    ];

    if (format === "hex") {
      const converted = rgbToHex(parsed[0], parsed[1], parsed[2]);
      return converted;
    } else if (format === "hsl") {
      const converted = rgbToHsl(parsed[0], parsed[1], parsed[2]);
      return `hsl(${converted[0]}, ${converted[1]}%, ${converted[2]}%)`;
    } else if (format === "cmyk") {
      const converted = rgbToCmyk(parsed[0], parsed[1], parsed[2]);
      return `cmyk(${converted[0]}%, ${converted[1]}%, ${converted[2]}%, ${converted[3]}%)`;
    }
  } else if (color.startsWith("hsl")) {
    const match: any = /hsl\(([^,]+),([^,]+%),([^,]+%)\)/.exec(color);

    const parsed = [parseFloat(match[1]), strip(match[2]), strip(match[3])];

    if (format === "hex") {
      const converted = hslToHex(parsed[0] as number, parsed[1], parsed[2]);
      return converted;
    } else if (format === "rgb") {
      const converted = hslToRgb(parsed[0] as number, parsed[1], parsed[2]);
      return `rgb(${converted[0]}, ${converted[1]}, ${converted[2]})`;
    } else if (format === "cmyk") {
      const converted = hslToCmyk(parsed[0] as number, parsed[1], parsed[2]);
      return `cmyk(${converted[0]}%, ${converted[1]}%, ${converted[2]}%, ${converted[3]}%)`;
    }
  } else if (color.startsWith("cmyk")) {
    const match: any = /cmyk\(([^,]+),([^,]+),([^,]+),([^,]+)\)/.exec(color);

    const parsed = [
      strip(match[1]),
      strip(match[2]),
      strip(match[3]),
      strip(match[4]),
    ];

    if (format === "hex") {
      const converted = cmykToHex(parsed[0], parsed[1], parsed[2], parsed[3]);
      return converted;
    } else if (format === "rgb") {
      const converted = cmykToRgb(parsed[0], parsed[1], parsed[2], parsed[3]);
      return `rgb(${converted[0]}, ${converted[1]}, ${converted[2]})`;
    } else if (format === "hsl") {
      const converted = cmykToHsl(parsed[0], parsed[1], parsed[2], parsed[3]);
      return `hsl(${converted[0]}, ${converted[1]}%, ${converted[2]}%)`;
    }
  } else if (color.startsWith("#")) {
    if (format === "cmyk") {
      const converted = hexToCmyk(color);
      return `cmyk(${converted[0]}%, ${converted[1]}%, ${converted[2]}%, ${converted[3]}%)`;
    } else if (format === "rgb") {
      const converted = hexToRgb(color);
      return `rgb(${converted[0]}, ${converted[1]}, ${converted[2]})`;
    } else if (format === "hsl") {
      const converted = hexToHsl(color);
      return `hsl(${converted[0]}, ${converted[1]}%, ${converted[2]}%)`;
    }
  }

  return color;
};

export default convert;
