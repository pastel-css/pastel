// Helper
import tryCatch from "../utility/tryCatch";

const injector = () => {
  const inject = (style: { css: string; id: string }) => {
    tryCatch(() => {
      const head = document.head || document.getElementsByTagName("head")[0];

      const splitId = style.id.split("-");

      const id = "pastel-" + splitId[splitId.length - 1];

      const styleElement = head.getElementsByClassName(id)[0]
        ? head.getElementsByClassName(id)[0]
        : document.createElement("style");

      if (head.getElementsByClassName(id)[0]) {
        if (!styleElement.textContent?.includes(style.css)) {
          styleElement.textContent += style.css;
        }
      } else {
        styleElement.textContent = style.css;
        styleElement.className = id;
        head.appendChild(styleElement);
      }
    });
  };

  return inject;
};

export default injector;
