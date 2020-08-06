export function findSeries(numberArr: number[]): number[] {
  for (let i = 0; i < 3; i++) {
    let nextValue =
      numberArr[numberArr.length - 1] +
      (numberArr[numberArr.length - 1] - numberArr[numberArr.length - 2] + 2);
    numberArr.push(nextValue);
  }
  return numberArr.slice(numberArr.length - 3, numberArr.length);
}
