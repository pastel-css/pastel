const toCamelCase = (v: string) =>
  v.replace(/([-_]\w)/g, (m) => m[1].toUpperCase());

export default toCamelCase;
