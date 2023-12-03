const fractionToPercent = (fraction: number | string) => {
  const match: any = /^(\d+\.?\d*)(%)?$/.exec(fraction.toString());

  const number = parseFloat(match[1]);

  const suffix = match[2];

  if (suffix != "%" || number <= 1) {
    return number * 100 + "%";
  }

  return number + suffix;
};

export default fractionToPercent;
