import tryCatch from "../../utility/tryCatch";

const rem = (px: number): number => {
  let fontSize = 16;

  tryCatch(
    () => (fontSize = parseFloat(document.documentElement.style.fontSize)),
    "Document is not defined!"
  );

  return px / fontSize;
};

export default rem;
