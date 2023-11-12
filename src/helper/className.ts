const className = (prefix: string = "pastel") => {
  const id = Math.random().toString(16).slice(2, 10);

  return `${prefix}-${id}`;
};

export default className;
