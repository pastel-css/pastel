// Transform
import toCss from "../transform/toCss";
// Types
import { PastelStyles } from "../types";

const globalCss = (selector: string, styles: PastelStyles) => {
  const result = toCss(selector, styles, {
    global: true,
    topLevel: true,
  });

  // TODO: Inject result into style tag
};

export default globalCss;
