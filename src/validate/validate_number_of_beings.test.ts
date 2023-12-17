import validateNumberOfBeings from "./validate_number_of_beings";

test("validate number of beings too small", () => {
  const tooLowPop = validateNumberOfBeings(2);
  expect(tooLowPop).toStrictEqual(["Number of beings is too small"]);
});

test("validate number of beings acceptable", () => {
  const highPop = validateNumberOfBeings(2000000000);
  expect(highPop).toStrictEqual([]);
});
