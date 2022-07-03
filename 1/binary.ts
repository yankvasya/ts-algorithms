export const binarySearch = (min, max, intended) => {
  if (intended < min || max < intended) {
    return `BAD ARGUMENTS -> intended: ${intended}; min: ${min}; max: ${max}`;
  }
  const current = Math.floor(min + (max - min) / 2);
  console.log(
    `intended: ${intended}; min: ${min}; max: ${max}; current: ${current}`
  );

  return intended === current
    ? `founded ${current}`
    : intended > current
    ? binarySearch(current + 1, max, intended)
    : binarySearch(min, current - 1, intended);
};
