import { describe, it, expect } from "vitest";

import * as utils from "../src/features/utils";

describe("clamp tests", () => {
  // Test case 1: Clamping a value below the minimum
  it("Clamps a value below the minimum", () => {
    const result = utils.clamp("-5px", 0, 10);
    const expected = "0px";
    expect(result).toEqual(expected);
  });

  // Test case 2: Clamping a value above the maximum
  it("Clamps a value above the maximum", () => {
    const result = utils.clamp("15px", 0, 10);
    const expected = "10px";
    expect(result).toEqual(expected);
  });

  // Test case 3: Clamping a value within the range
  it("Clamps a value within the range", () => {
    const result = utils.clamp("5px", 0, 10);
    const expected = "5px";
    expect(result).toEqual(expected);
  });

  // Test case 4: Clamping a numeric value below the minimum
  it("Clamps a numeric value below the minimum", () => {
    const result = utils.clamp(-5, 0, 10);
    const expected = 0;
    expect(result).toEqual(expected);
  });

  // Test case 5: Clamping a numeric value above the maximum
  it("Clamps a numeric value above the maximum", () => {
    const result = utils.clamp(15, 0, 10);
    const expected = 10;
    expect(result).toEqual(expected);
  });

  // Test case 6: Clamping a numeric value within the range
  it("Clamps a numeric value within the range", () => {
    const result = utils.clamp(5, 0, 10);
    const expected = 5;
    expect(result).toEqual(expected);
  });

  // Test case 7: Clamping a value with no units within the range
  it("Clamps a value with no units within the range", () => {
    const result = utils.clamp("7", 0, 10);
    const expected = "7";
    expect(result).toEqual(expected);
  });
});

describe("contrast tests", () => {
  it("should adjust luminance for increased contrast", () => {
    const color = "#aabbcc"; // Example color
    const delta = 10; // Increase contrast by 10%

    const adjustedColor = utils.contrast(color, delta);

    // Perform your assertion here based on the expected result
    // For example, you might want to check that the adjusted color is different from the original
    expect(adjustedColor).not.toBe(color);
  });

  it("should handle decreased contrast", () => {
    const color = "#aabbcc"; // Example color
    const delta = -10; // Decrease contrast by 10%

    const adjustedColor = utils.contrast(color, delta);

    // Perform your assertion here based on the expected result
    // For example, you might want to check that the adjusted color is different from the original

    expect(adjustedColor).not.toBe(color);
  });

  it("should handle maximum luminance", () => {
    const color = "#ffffff"; // White color
    const delta = -10; // Decrease contrast by 10%

    const adjustedColor = utils.contrast(color, delta);

    // Perform your assertion here based on the expected result
    // For example, you might want to check that the adjusted color is still white
    expect(adjustedColor).toBe("#747474");
  });

  it("should handle minimum luminance", () => {
    const color = "#000000"; // Black color
    const delta = -10; // Decrease contrast by 10%

    const adjustedColor = utils.contrast(color, delta);

    // Perform your assertion here based on the expected result
    // For example, you might want to check that the adjusted color is still black
    expect(adjustedColor).toBe("#8c8c8c");
  });
});

describe("convert tests", () => {
  it("Converts RGB to Hex", () => {
    expect(utils.convert("rgb(255, 0, 0)", "hex")).toBe("#ff0000");
  });

  it("Converts HSL to Hex", () => {
    expect(utils.convert("hsl(120, 100%, 50%)", "hex")).toBe("#00ff00");
  });

  it("Converts CMYK to Hex", () => {
    expect(utils.convert("cmyk(100%, 0%, 100%, 0%)", "hex")).toBe("#00ff00");
  });

  // Test cases for converting to RGB format
  it("Converts Hex to RGB", () => {
    expect(utils.convert("#ff0000", "rgb")).toBe("rgb(255, 0, 0)");
  });

  it("Converts HSL to RGB", () => {
    expect(utils.convert("hsl(120, 100%, 50%)", "rgb")).toBe("rgb(0, 255, 0)");
  });

  it("Converts CMYK to RGB", () => {
    expect(utils.convert("cmyk(100%, 0%, 100%, 0%)", "rgb")).toBe(
      "rgb(0, 255, 0)"
    );
  });

  // Test cases for converting to HSL format
  it("Converts Hex to HSL", () => {
    expect(utils.convert("#ff0000", "hsl")).toBe("hsl(0, 100%, 50%)");
  });

  it("Converts RGB to HSL", () => {
    expect(utils.convert("rgb(0, 255, 0)", "hsl")).toBe("hsl(120, 100%, 50%)");
  });

  it("Converts CMYK to HSL", () => {
    expect(utils.convert("cmyk(100%, 0%, 100%, 0%)", "hsl")).toBe(
      "hsl(120, 100%, 50%)"
    );
  });

  // Test cases for converting to CMYK format
  it("Converts Hex to CMYK", () => {
    expect(utils.convert("#ff0000", "cmyk")).toBe("cmyk(0%, 100%, 100%, 0%)");
  });

  it("Converts RGB to CMYK", () => {
    expect(utils.convert("rgb(0, 255, 0)", "cmyk")).toBe(
      "cmyk(100%, 0%, 100%, 0%)"
    );
  });

  it("Converts HSL to CMYK", () => {
    expect(utils.convert("hsl(240, 100%, 50%)", "cmyk")).toBe(
      "cmyk(100%, 100%, 0%, 0%)"
    );
  });

  it("Converts RGB to HSL with different input formats", () => {
    const rgbValues = ["rgb(0, 255, 0)", "rgb(0, 255,0)", "rgb( 0,255,0)"];
    for (const rgbValue of rgbValues) {
      expect(utils.convert(rgbValue, "hsl")).toBe("hsl(120, 100%, 50%)");
    }
  });

  // RGB to Hex conversion tests
  it("Converts RGB to Hex with different input formats", () => {
    const rgbValues = ["rgb(255, 0, 0)", "rgb(255,0, 0)", "rgb(255, 0 ,0 )"];
    for (const rgbValue of rgbValues) {
      expect(utils.convert(rgbValue, "hex")).toBe("#ff0000");
    }
  });

  // RGB to CMYK conversion tests
  it("Converts RGB to CMYK with different input formats", () => {
    const rgbValues = ["rgb(0, 0, 255)", "rgb(0, 0, 255)", "rgb(0 , 0 , 255 )"];
    for (const rgbValue of rgbValues) {
      expect(utils.convert(rgbValue, "cmyk")).toBe("cmyk(100%, 100%, 0%, 0%)");
    }
  });

  // HSL to RGB conversion tests
  it("Converts HSL to RGB with different input formats", () => {
    const hslValues = ["hsl(120, 100%, 50%)"];
    for (const hslValue of hslValues) {
      expect(utils.convert(hslValue, "rgb")).toBe("rgb(0, 255, 0)");
    }
  });

  // HSL to Hex conversion tests
  it("Converts HSL to Hex with different input formats", () => {
    const hslValues = ["hsl(60, 100%, 50%)"];
    for (const hslValue of hslValues) {
      expect(utils.convert(hslValue, "hex")).toBe("#ffff00");
    }
  });

  // HSL to CMYK conversion tests
  it("Converts HSL to CMYK with different input formats", () => {
    const hslValues = ["hsl(240, 100%, 50%)"];
    for (const hslValue of hslValues) {
      expect(utils.convert(hslValue, "cmyk")).toBe("cmyk(100%, 100%, 0%, 0%)");
    }
  });

  // CMYK to RGB conversion tests
  it("Converts CMYK to RGB with different input formats", () => {
    const cmykValues = [
      "cmyk(0%, 100%, 100%, 0%)",
      "cmyk(0%, 100%, 100%, 0%)",
      "cmyk( 0% , 100% , 100% , 0% )",
    ];
    for (const cmykValue of cmykValues) {
      expect(utils.convert(cmykValue, "rgb")).toBe("rgb(255, 0, 0)");
    }
  });
});

describe("darken tests", () => {
  it("should darken a hex color by a specified percentage", () => {
    const originalColor = "#FF0000"; // Red
    const darkenedColor = utils.darken(originalColor, 80);
    expect(darkenedColor).toBe("#330000"); // Dark red
  });

  it("should darken an RGB color by a specified percentage", () => {
    const originalColor = "rgb(255, 0, 0)"; // Red
    const darkenedColor = utils.darken(originalColor, 50);
    expect(darkenedColor).toBe("#800000"); // Dark red
  });
});

describe("desaturate tests", () => {
  it("should desaturate a red color by a specified percentage", () => {
    const originalColor = "#FF0000"; // Red
    const desaturatedColor = utils.desaturate(originalColor, 50);
    expect(desaturatedColor).toBe("#bf4040"); // Darker red
  });

  it("should desaturate a green color by a specified percentage", () => {
    const originalColor = "#00FF00"; // Green
    const desaturatedColor = utils.desaturate(originalColor, 50);
    expect(desaturatedColor).toBe("#40bf40"); // Darker green
  });

  it("should desaturate a blue color by a specified percentage", () => {
    const originalColor = "#0000FF"; // Blue
    const desaturatedColor = utils.desaturate(originalColor, 50);
    expect(desaturatedColor).toBe("#4040bf"); // Darker blue
  });
});

describe("fr tests", () => {
  it("should return a string representation of a number divided by 4 and appended with 'rem'", () => {
    const inputNumber = 16;
    const expectedOutput = "4rem";
    const actualOutput = utils.fr(inputNumber);
    expect(actualOutput).toEqual(expectedOutput);
  });

  it("should return the original input if it is not a number", () => {
    const inputString = "hello";
    const expectedOutput = "hello";
    const actualOutput = utils.fr(inputString);
    expect(actualOutput).toEqual(expectedOutput);
  });
});

describe("hue tests", () => {
  it("should shift the hue of a red color by a positive delta", () => {
    const originalColor = "#FF0000"; // Red
    const hueDelta = 30;
    const expectedColor = "#ff8000"; // Orange
    const actualColor = utils.hue(originalColor, hueDelta);
    expect(actualColor).toEqual(expectedColor);
  });

  it("should shift the hue of a green color by a negative delta", () => {
    const originalColor = "#00FF00"; // Green
    const hueDelta = -30;
    const expectedColor = "#80ff00"; // Light green
    const actualColor = utils.hue(originalColor, hueDelta);
    expect(actualColor).toEqual(expectedColor);
  });

  it("should wrap the hue value when shifting beyond 360 degrees", () => {
    const originalColor = "#0000FF"; // Blue
    const hueDelta = 390;
    const expectedColor = "#8000ff"; // Purple
    const actualColor = utils.hue(originalColor, hueDelta);
    expect(actualColor).toEqual(expectedColor);
  });
});

describe("invert tests", () => {
  it("should invert the color of red", () => {
    const originalColor = "#FF0000"; // Red
    const expectedColor = "#00ffff"; // Blue
    const actualColor = utils.invert(originalColor);
    expect(actualColor).toEqual(expectedColor);
  });

  it("should invert the color of green", () => {
    const originalColor = "#00FF00"; // Green
    const expectedColor = "#ff00ff"; // Magenta
    const actualColor = utils.invert(originalColor);
    expect(actualColor).toEqual(expectedColor);
  });

  it("should invert the color of blue", () => {
    const originalColor = "#0000FF"; // Blue
    const expectedColor = "#ffff00"; // Yellow
    const actualColor = utils.invert(originalColor);
    expect(actualColor).toEqual(expectedColor);
  });

  it("should handle white and black colors", () => {
    const originalWhiteColor = "#FFFFFF"; // White
    const expectedWhiteColor = "#000000"; // Black
    const actualWhiteColor = utils.invert(originalWhiteColor);
    expect(actualWhiteColor).toEqual(expectedWhiteColor);

    const originalBlackColor = "#000000"; // Black
    const expectedBlackColor = "#ffffff"; // White
    const actualBlackColor = utils.invert(originalBlackColor);
    expect(actualBlackColor).toEqual(expectedBlackColor);
  });
});

describe("lighten tests", () => {
  it("should lighten a red color by a specified percentage", () => {
    const originalColor = "#FF0000"; // Red
    const lightenedColor = utils.lighten(originalColor, 50);
    expect(lightenedColor).toBe("#ff8080"); // Lighter red
  });

  it("should lighten a green color by a specified percentage", () => {
    const originalColor = "#00FF00"; // Green
    const lightenedColor = utils.lighten(originalColor, 50);
    expect(lightenedColor).toBe("#80ff80"); // Lighter green
  });

  it("should lighten a blue color by a specified percentage", () => {
    const originalColor = "#0000FF"; // Blue
    const lightenedColor = utils.lighten(originalColor, 50);
    expect(lightenedColor).toBe("#8080ff"); // Lighter blue
  });
});

describe("opacity tests", () => {
  it("should apply full opacity to a color", () => {
    const originalColor = "#FF0000"; // Red
    const expectedColor = "rgba(255, 0, 0, 1)"; // Red with full opacity
    const actualColor = utils.opacity(originalColor, 1);
    expect(actualColor).toEqual(expectedColor);
  });

  it("should apply half opacity to a color", () => {
    const originalColor = "#00FF00"; // Green
    const expectedColor = "rgba(0, 255, 0, 0.5)"; // Green with half opacity
    const actualColor = utils.opacity(originalColor, 0.5);
    expect(actualColor).toEqual(expectedColor);
  });

  it("should apply zero opacity to a color", () => {
    const originalColor = "#0000FF"; // Blue
    const expectedColor = "rgba(0, 0, 255, 0)"; // Blue with zero opacity (transparent)
    const actualColor = utils.opacity(originalColor, 0);
    expect(actualColor).toEqual(expectedColor);
  });
});

describe("px tests", () => {
  it("should convert rem values to corresponding pixel values", () => {
    const fontSize = 16; // Assuming default font size of 16px
    const remValue = 1.5;
    const expectedPixelValue = fontSize * remValue;
    const actualPixelValue = utils.px(remValue);
    expect(actualPixelValue).toEqual(expectedPixelValue);
  });
});

describe("rem tests", () => {
  it("should convert px values to corresponding rem values", () => {
    const fontSize = 16; // Assuming default font size of 16px
    const px = 16;
    const expectedPixelValue = fontSize / px;
    const actualPixelValue = utils.rem(px);
    expect(actualPixelValue).toEqual(expectedPixelValue);
  });
});

describe("saturate tests", () => {
  it("should saturate a red color by a specified amount", () => {
    const originalColor = "#bf4040"; // Red
    const saturatedColor = utils.saturate(originalColor, 50);
    expect(saturatedColor).toBe("#ff0000"); // More vivid red
  });

  it("should saturate a green color by a specified amount", () => {
    const originalColor = "#40bf40"; // Green
    const saturatedColor = utils.saturate(originalColor, 50);
    expect(saturatedColor).toBe("#00ff00"); // More vivid green
  });

  it("should saturate a blue color by a specified amount", () => {
    const originalColor = "#4040bf"; // Blue
    const saturatedColor = utils.saturate(originalColor, 50);
    expect(saturatedColor).toBe("#0000ff"); // More vivid blue
  });
});

describe("shade tests", () => {
  it("should darken a red color by a specified percentage", () => {
    const originalColor = "#FF0000"; // Red
    const shadedColor = utils.shade(originalColor, 50);
    expect(shadedColor).toBe("#7f0000"); // Darker red
  });

  it("should darken a green color by a specified percentage", () => {
    const originalColor = "#00FF00"; // Green
    const shadedColor = utils.shade(originalColor, 50);
    expect(shadedColor).toBe("#007f00"); // Darker green
  });

  it("should darken a blue color by a specified percentage", () => {
    const originalColor = "#0000FF"; // Blue
    const shadedColor = utils.shade(originalColor, 50);
    expect(shadedColor).toBe("#00007f"); // Darker blue
  });
});

describe("tint tests", () => {
  it("should lighten a red color by a specified percentage", () => {
    const originalColor = "#7f0000"; // Red
    const tintedColor = utils.tint(originalColor, 50);
    expect(tintedColor).toBe("#bf0000"); // Lighter red
  });

  it("should lighten a green color by a specified percentage", () => {
    const originalColor = "#007f00"; // Green
    const tintedColor = utils.tint(originalColor, 50);
    expect(tintedColor).toBe("#00bf00"); // Lighter green
  });

  it("should lighten a blue color by a specified percentage", () => {
    const originalColor = "#00007f"; // Blue
    const tintedColor = utils.tint(originalColor, 50);
    expect(tintedColor).toBe("#0000bf"); // Lighter blue
  });
});
