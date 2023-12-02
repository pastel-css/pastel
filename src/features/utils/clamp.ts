const clamp = (value: string | number, min: number, max: number) => {
  const match = /^(-?\d+)(.*)$/.exec(value.toString());

  const numeric = match ? parseFloat(match[1]) : 0;

  const prefix = match ? match[2] : "";

  if (numeric < min) {
    return prefix.length > 0 ? min + prefix : min;
  } else if (numeric > max) {
    return prefix.length > 0 ? max + prefix : max;
  } else {
    return value;
  }
};

export default clamp;
