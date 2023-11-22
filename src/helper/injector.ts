// Helper
import tryCatch from "./tryCatch";

const injector = () => {
  const inject = (style: { css: string; id: string }) => {
    tryCatch(() => {
      const head = document.head || document.getElementsByTagName("head")[0];

      const styleElement = document.createElement("style");
      styleElement.textContent = style.css;
      styleElement.id = style.id;
      head.appendChild(styleElement);
    });
  };

  return inject;
};

export default injector;
