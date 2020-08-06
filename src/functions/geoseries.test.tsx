import { findSeries } from "./geoseries";

test("find xyz in [3,5,9,15] , result => [23,33,45]", () => {
  let numberArr = [3, 5, 9, 15];
  expect(findSeries(numberArr)).toEqual([23, 33, 45]);
});

test("find xyz in [9,15,23,33] , result => [45,59,75]", () => {
  let numberArr = [9, 15, 23, 33];
  expect(findSeries(numberArr)).toEqual([45, 59, 75]);
});

test("find xyz in [33,45,59,75] , result => [93,113,135]", () => {
  let numberArr = [33, 45, 59, 75];
  expect(findSeries(numberArr)).toEqual([93, 113, 135]);
});
