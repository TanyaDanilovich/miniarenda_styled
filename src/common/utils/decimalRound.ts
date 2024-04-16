export const decimalRound = (num: number, decimalCount: number = 4) => {
  let k = 10;
  for (let i = 1; i < decimalCount; i++) k *= 10;
  return Math.round(num * k) / k;
};
