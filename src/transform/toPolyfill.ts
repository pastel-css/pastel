import * as CSS from "csstype";
// Utilities
import split from "../utility/split";

export type ToPolyfillType = {
  [P in keyof CSS.Properties]: (value: any) => any;
};

const parseContent = (v: string) => ({
  content:
    v.includes('"') ||
    v.includes("'") ||
    /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(
      v
    )
      ? v
      : `"${v}"`,
});

const toPolyfill: ToPolyfillType = {
  alignItems: (v: CSS.Properties["alignItems"]) => ({
    "align-items": v,
    "-webkit-align-items": v,
    "-ms-flex-align": v,
  }),
  alignSelf: (v: CSS.Properties["alignSelf"]) => ({
    "align-self": v,
    "-webkit-align-self": v,
    "-ms-flex-item-align": v,
  }),
  appearance: (v: CSS.Properties["appearance"]) => ({
    appearance: v,
    "-webkit-appearance": v,
    "-ms-appearance": v,
  }),
  backfaceVisibility: (v: CSS.Properties["backfaceVisibility"]) => ({
    "backface-visibility": v,
    "-webkit-backface-visibility": v,
    "-ms-backface-visibility": v,
  }),
  backdropFilter: (v: CSS.Properties["backdropFilter"]) => ({
    "backdrop-filter": v,
    "-webkit-backdrop-filter": v,
  }),
  backgroundClip: (v: CSS.Properties["backgroundClip"]) => ({
    "background-clip": v,
    "-webkit-background-clip": v,
    "-ms-background-clip": v,
  }),
  boxDecorationBreak: (v: CSS.Properties["boxDecorationBreak"]) => ({
    "box-decoration-break": v,
    "-webkit-box-decoration-break": v,
    "-ms-box-decoration-break": v,
  }),
  clipPath: (v: CSS.Properties["clipPath"]) => ({
    "clip-path": v,
    "-webkit-clip-path": v,
    "-ms-clip-path": v,
  }),
  content: (v: CSS.Properties["content"] = "none") => {
    const parsed = parseContent(v);

    return {
      content: parsed,
      "-webkit-content": parsed,
      "-ms-content": parsed,
    };
  },
  flexDirection: (v: CSS.Properties["flexDirection"]) => ({
    "flex-direction": v,
    "-webkit-flex-direction": v,
    "-ms-flex-direction": v,
  }),
  flexBasis: (v: CSS.Properties["flexBasis"]) => ({
    "flex-basis": v,
    "-webkit-flex-basis": v,
    "-ms-flex-basis": v,
  }),
  flexWrap: (v: CSS.Properties["flexWrap"]) => ({
    "flex-wrap": v,
    "-webkit-flex-wrap": v,
    "-ms-flex-wrap": v,
  }),
  hyphens: (v: CSS.Properties["hyphens"]) => ({
    hyphens: v,
    "-webkit-hyphens": v,
  }),
  justifyContent: (v: CSS.Properties["justifyContent"]) => ({
    "justify-content": v,
    "-webkit-justify-content": v,
    "-ms-flex-justify": v,
  }),
  marginBlock: (v: CSS.Properties["marginBlock"] = 0) => {
    const props = split(v);

    return {
      "margin-block-start": props[0],
      "margin-block-end": props[1] || props[0],
    };
  },
  marginInline: (v: CSS.Properties["marginInline"] = 0) => {
    const props = split(v);

    return {
      "margin-inline-start": props[0],
      "margin-inline-end": props[1] || props[0],
    };
  },
  maskImage: (v: CSS.Properties["maskImage"]) => ({
    "mask-image": v,
    "-webkit-mask-image": v,
    "-ms-mask-image": v,
  }),
  maskSize: (v: CSS.Properties["maskSize"]) => ({
    "mask-size": v,
    "-webkit-mask-size": v,
    "-ms-mask-size": v,
  }),
  paddingBlock: (v: CSS.Properties["paddingBlock"] = 0) => {
    const props = split(v);

    return {
      "padding-block-start": props[0],
      "padding-block-end": props[1] || props[0],
    };
  },
  paddingInline: (v: CSS.Properties["paddingInline"] = 0) => {
    const props = split(v);

    return {
      "padding-inline-start": props[0],
      "padding-inline-end": props[1] || props[0],
    };
  },
  userSelect: (v: CSS.Properties["userSelect"]) => ({
    "user-select": v,
    "-webkit-user-select": v,
    "-ms-user-select": v,
  }),
};

export default toPolyfill;
