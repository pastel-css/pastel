const toPlainSelectors = (parent: string, selector: string) =>
  selector.includes("&")
    ? selector.replace(
        /&/g,
        /[ +>|~]/.test(parent) && /&.*&/.test(selector)
          ? `:is(${parent})`
          : parent
      )
    : parent + " " + selector;

export default toPlainSelectors;
