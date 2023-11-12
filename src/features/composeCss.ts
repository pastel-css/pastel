import css from "./css";
// Types
import { PastelStyles } from "../types";

const composeCss = (styles: { [x in string]: PastelStyles }) => {
  const result: { [x in string]: string } = {};

  Object.keys(styles).forEach((key) => {
    result[key] = css(styles[key]);
  });

  return result;
};

export default composeCss;
