// Transform
import toCss from "../transform/toCss";
// Utility
import className from "../foundation/className";
import injector from "../foundation/injector";
// Types
import { PastelStyles, PastelCssOptions } from "../types";

const inject = injector();

const css = (styles: PastelStyles, options?: PastelCssOptions) => {
  const cls = className(options?.prefix);

  const result = toCss("." + cls, styles);

  inject({
    id: cls,
    css: result,
  });

  return cls;
};

export default css;
