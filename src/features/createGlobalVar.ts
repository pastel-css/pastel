// Transform
import toCss from "../transform/toCss";
import toVariable from "../transform/toVariable";
// Utility
import injector from "../foundation/injector";
import className from "../foundation/className";

const inject = injector();

const createGlobalVar = (
  selector: string = ":root",
  value: string | number = ""
) => {
  const id = className();

  const varName = toVariable(id);

  const result = toCss(selector, {
    [varName]: value,
  } as any);

  inject({
    id: varName,
    css: result,
  });

  return varName;
};

export default createGlobalVar;
