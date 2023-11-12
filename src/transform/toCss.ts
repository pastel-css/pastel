// Transform
import toKebabCase from "./toKebabCase";

type toCssOptions = {
  topLevel?: boolean;
  global?: boolean;
};

const toCss = (
  selector: string,
  styles: any,
  options: toCssOptions = {
    topLevel: true,
    global: false,
  }
) => {
  let css = "";

  const sl = !options.global ? `.${selector}` : selector;

  for (const key in styles) {
    const value = styles[key];

    if (typeof value === "object") {
      if (key.startsWith("@")) {
        css += `${toKebabCase(key)} {\n`;
        css += `  ${sl} {\n`;
        css += `    ${toCss(selector, value, {
          topLevel: false,
          global: options.global,
        })}`;
        css += "  }\n";
        css += "}\n";
      } else {
        css += `${sl}${toKebabCase(key)} {\n`;
        css += `  ${toCss(selector, value, {
          topLevel: false,
          global: options.global,
        })}`;
        css += "}\n";
      }
    } else {
      options.topLevel && (css += `${sl} {\n`);
      css += `  ${toKebabCase(key)}: ${JSON.stringify(value)},\n`;
      options.topLevel && (css += "}\n");
    }
  }

  return css;
};

export default toCss;
