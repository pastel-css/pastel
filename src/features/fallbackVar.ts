const fallbackVar = (varName: string, fallback: string) => {
  const varValue = getComputedStyle(document.body).getPropertyValue(varName);

  if (varValue) {
    return varValue;
  } else {
    return fallback;
  }
};

export default fallbackVar;
