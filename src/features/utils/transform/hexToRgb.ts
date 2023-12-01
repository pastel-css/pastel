// Function to convert hex to RGB components
const hexToRgb = (color: string): [number, number, number] => {
  const red = parseInt(color.substring(1, 3), 16);
  const green = parseInt(color.substring(3, 5), 16);
  const blue = parseInt(
    color.substring(
      5,

      7
    ),
    16
  );

  return [red, green, blue];
};

export default hexToRgb;
