// Transform
import toCss from "../transform/toCss";
// Utility
import injector from "../foundation/injector";
// Types
import { PastelStyles } from "../types";

const inject = injector();

const globalCss = (selector: string, styles: PastelStyles) => {
  const result = toCss(selector, styles);

  inject({
    id: selector,
    css: result,
  });
};

export default globalCss;
