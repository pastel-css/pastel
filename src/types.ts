import * as CSS from "csstype";

export type PastelStyles = CSS.Properties<string | number> & {
  [K in CSS.Pseudos]?: CSS.Properties<string | number>;
} & {
  [K in `${CSS.AtRules} ${string}`]?: CSS.Properties<string | number>;
} & {
  [K in `--${string}`]?: string | number;
};

export type PastelCssOptions = {
  prefix?: string;
};
