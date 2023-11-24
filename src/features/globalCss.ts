// Transform
import toCss from "../transform/toCss";
// Helper
import injector from "../foundation/injector";
// Types
import { PastelStyles } from "../types";

const inject = injector();

const globalCss = (selector: string, styles: PastelStyles) => {
  // TODO: Fix return value of toCss and of this function

  const result = toCss(selector, styles, {
    global: true,
    topLevel: true,
  });

  inject({
    id: selector,
    css: result,
  });
};

export default globalCss;
