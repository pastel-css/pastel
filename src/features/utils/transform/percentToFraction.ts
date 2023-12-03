const percentToFraction = (percent: number | string) => {
  const match: any = /^(\d+\.?\d*)(%)?$/.exec(percent.toString());

  const number = parseFloat(match[1]);

  const suffix = match[2];

  if (suffix === "%") {
    return number / 100;
  }

  return number;
};

export default percentToFraction;
