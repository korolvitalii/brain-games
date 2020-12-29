export default (min = 0, max = 108) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};
