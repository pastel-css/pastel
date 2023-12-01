const rem = (px: number): number => {
  const fontSize = parseFloat(document.documentElement.style.fontSize);
  return px / fontSize;
};

export default rem;
