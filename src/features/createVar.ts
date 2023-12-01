// Transform
import toCss from "../transform/toCss";
import toVariable from "../transform/toVariable";
// Utility
import injector from "../foundation/injector";
import className from "../foundation/className";

const inject = injector();

const createVar = (value: string | number = "") => {
  const id = className();

  const varName = toVariable(id);

  const result = toCss(":root", {
    [varName]: value,
  } as any);

  inject({
    id: varName,
    css: result,
  });

  return varName;
};

export default createVar;
