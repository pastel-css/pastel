// Transform
import toCss from "../transform/toCss";
// Helper
import className from "../helper/className";
import injector from "../helper/injector";
// Types
import { PastelStyles, PastelCssOptions } from "../types";

const inject = injector();

const css = (styles: PastelStyles, options?: PastelCssOptions) => {
  // TODO: Fix return value of toCss and of this function

  const cls = className(options?.prefix);

  const result = toCss(cls, styles);

  inject({
    id: cls,
    css: result,
  });

  return cls;
};

export default css;
