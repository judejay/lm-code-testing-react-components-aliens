import validateNumberOfBeings from "./validate_number_of_beings";

test("validate number of beings too small", () => {
  const toLowPop = validateNumberOfBeings(2);
  expect(toLowPop).toStrictEqual(["Number of beings is too small"]);
});

test("validate number of beings acceptable", () => {
  const toLowPop = validateNumberOfBeings(2000000000);
  expect(toLowPop).toStrictEqual([]);
});
