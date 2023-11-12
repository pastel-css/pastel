const toKebabCase = (v: string) =>
  v.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

// Add .replace(/\s+/g, "-") for space support

export default toKebabCase;
