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
    console.log(adjustedColor);

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
