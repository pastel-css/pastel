// Transform
import toCss from "../transform/toCss";
// Helper
import className from "../helper/className";
// Types
import { PastelStyles, PastelCssOptions } from "../types";

const css = (styles: PastelStyles, options?: PastelCssOptions) => {
  const cls = className(options?.prefix);

  const result = toCss(cls, styles);

  // TODO: Inject result into style tag

  return cls;
};

export default css;
