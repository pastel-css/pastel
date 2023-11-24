const tryCatch = (fn: Function, message?: string) => {
  try {
    fn();
  } catch (err) {
    console.error(message, err);
  }
};

export default tryCatch;
