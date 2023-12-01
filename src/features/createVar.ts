// Transform
import toVariable from "../transform/toVariable";
// Utility
import className from "../foundation/className";

const createVar = () => {
  const id = className();

  const varName = toVariable(id);

  return varName;
};

export default createVar;
