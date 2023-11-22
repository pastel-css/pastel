// Transform
import toCss from "../transform/toCss";
import toVariable from "../transform/toVariable";
// Helper
import injector from "../helper/injector";
import className from "../helper/className";

const inject = injector();

const createVar = (selector: string = "*", value: string | number = "") => {
  const id = className();

  const varName = toVariable(id);

  const result = toCss(
    selector,
    {
      [varName]: value,
    },
    {
      topLevel: true,
      global: true,
    }
  );

  inject({
    id: varName,
    css: result,
  });

  return varName;
};

export default createVar;
