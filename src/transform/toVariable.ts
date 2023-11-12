import toKebabCase from "./toKebabCase";

const toVariable = (v: string) => {
  return `--${toKebabCase(v)}`;
};

export default toVariable;
