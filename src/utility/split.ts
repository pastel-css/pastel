const split = (s: string | number) => {
  if (typeof s === "number") {
    return [s];
  }

  let result = s.replace(/\s+(?![^()]*\))/g, " ");
  result = result.trim();
  return result.split(" ");
};

export default split;
