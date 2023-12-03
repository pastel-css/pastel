import tryCatch from "../../utility/tryCatch";

const px = (rem: number): number => {
  let fontSize = 16;

  tryCatch(
    () => (fontSize = parseFloat(document.documentElement.style.fontSize)),
    "Document is not defined!"
  );

  return rem * fontSize;
};

export default px;
