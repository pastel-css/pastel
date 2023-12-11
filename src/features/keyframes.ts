import CSS from "csstype";
// Transform
import toCss from "../transform/toCss";
// Utility
import injector from "../foundation/injector";
import className from "../foundation/className";

type KeyframesTypes = {
  [k in `${string}%`]?: CSS.Properties;
} & {
  from?: CSS.Properties;
} & {
  to?: CSS.Properties;
};

const inject = injector();

const keyframes = (value: KeyframesTypes) => {
  const id = className();

  const result = toCss(`@keyframes ${id}`, value as any);

  inject({
    id: id,
    css: result,
  });

  return id;
};

export default keyframes;
