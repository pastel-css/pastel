const clamp = (value: string | number, min: number, max: number) => {
  const match = /^(\d+)(.*)$/.exec(value.toString());

  const numeric = match ? parseFloat(match[1]) : 0;

  const prefix = match ? match[2] : "";

  if (numeric < min) {
    return min + prefix;
  } else if (numeric > max) {
    return max + prefix;
  } else {
    return value;
  }
};

export default clamp;
