const fallbackVar = (varName: string, fallback: string) => {
  const varValue = getComputedStyle(document.documentElement).getPropertyValue(
    varName
  );

  if (varValue) {
    return varValue;
  } else {
    return fallback;
  }
};

export default fallbackVar;
