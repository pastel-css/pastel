import css from "./css";
// Types
import { PastelStyles } from "../types";

/**
 * composeCss
 * @param styles - The object that includes different style objects
 * @returns - An object with classnames corresponding to the style objects passed
 */

const composeCss = (styles: { [x in string]: PastelStyles }) => {
  const result: { [x in string]: string } = {};

  Object.keys(styles).forEach((key) => {
    result[key] = css(styles[key]);
  });

  return result;
};

export default composeCss;
