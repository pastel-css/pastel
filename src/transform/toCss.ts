// Transform
import toKebabCase from "./toKebabCase";
import toPolyfill, { ToPolyfillType } from "./toPolyfill";
import toPlainSelectors from "./toPlainSelectors";
// Utility
import isAtLike from "../utility/isAtLike";
import isNestedSelectorLike from "../utility/isNestedSelectorLike";
import isPseudoLike from "../utility/isPseudoLike";
// Types
import { PastelStyles } from "../types";

const unitless: any = {
  animationIterationCount: true,
  borderImage: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexShrink: true,
  fontWeight: true,
  gridArea: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnStart: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowStart: true,
  initialLetter: true,
  lineClamp: true,
  lineHeight: true,
  maxLines: true,
  opacity: true,
  order: true,
  orphans: true,
  scale: true,
  tabSize: true,
  WebkitLineClamp: true,
  widows: true,
  zIndex: true,
  zoom: true,

  // svg properties
  fillOpacity: true,
  floodOpacity: true,
  maskBorder: true,
  maskBorderOutset: true,
  maskBorderSlice: true,
  maskBorderWidth: true,
  shapeImageThreshold: true,
  stopOpacity: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true,
};

const parseValue = (rule: string, value: string | number) => {
  if (unitless[rule]) {
    if (typeof value === "number") {
      return value;
    }

    const match = value.match(/^\d+/);

    return match ? parseInt(match[0]) : 0;
  } else {
    return typeof value === "number" ? value.toString() + "px" : value;
  }
};

const toCss = (selectors: string | string[], styles: PastelStyles) => {
  let rules = "";

  let props = "";

  const selector = Array.isArray(selectors) ? selectors.join(",") : selectors;

  for (const key in styles) {
    const isAtRule = isAtLike(key);

    const isPseudoRule = isPseudoLike(key);

    const isNestedSelector = isNestedSelectorLike(key);

    if (isAtRule) {
      rules += `${key} { ${toCss(
        selector,
        styles[key as keyof PastelStyles] as PastelStyles
      )} }`;
      continue;
    } else if (isPseudoRule) {
      rules += toCss(
        selector + key,
        styles[key as keyof PastelStyles] as PastelStyles
      );
      continue;
    } else if (isNestedSelector) {
      const plain = toPlainSelectors(selector, key);

      rules += toCss(plain, styles[key as keyof PastelStyles] as PastelStyles);
      continue;
    } else {
      const polyfill = toPolyfill[key as keyof ToPolyfillType];

      if (polyfill) {
        const polyfilled = polyfill(
          parseValue(key, styles[key as keyof PastelStyles] as any)
        );

        for (const poly in polyfilled) {
          props += `${poly}: ${polyfilled[poly]};\n`;
        }

        continue;
      }

      if (typeof styles[key as keyof PastelStyles] === "object") {
        props += toCss(key, styles[key as keyof PastelStyles] as PastelStyles);
        continue;
      }

      props += `${toKebabCase(key)}: ${parseValue(
        key,
        styles[key as keyof PastelStyles] as string | number
      )};\n`;
    }
  }

  return `${selector} { ${props} } ${rules}`;
};

export default toCss;
