import * as CSS from "csstype";

export type PastelStyles = CSS.Properties & {
  [K in CSS.Pseudos]?: CSS.Properties;
} & {
  [K in `${CSS.AtRules} ${string}`]?: CSS.Properties;
} & {
  [K in `--${string}`]?: string | number;
};

export type PastelCssOptions = {
  prefix?: string;
};
