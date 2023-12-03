const fractionToPercent = (fraction: number | string) => {
  const match: any = /^(\d+\.?\d*)(%)?$/.exec(fraction.toString());

  console.log(match);

  const number = parseFloat(match[1]);

  const suffix = match[2];

  if (suffix != "%" || number <= 1) {
    return number * 100 + "%";
  }

  return number + suffix;
};

export default fractionToPercent;
