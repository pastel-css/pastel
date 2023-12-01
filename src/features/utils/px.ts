const px = (rem: number): number => {
  const fontSize = parseFloat(document.documentElement.style.fontSize);
  return rem * fontSize;
};

export default px;
