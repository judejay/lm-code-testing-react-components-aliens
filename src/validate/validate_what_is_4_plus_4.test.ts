import validateWhatIs4Plus4 from "./validate_what_is_4_plus_4";

test("validate what is 4 plus 4 with 7", () => {
  const excuse = validateWhatIs4Plus4("7");
  expect(excuse).toStrictEqual(["Incorrect answer"]);
});

test("validate what is 4 plus 4 with 0", () => {
  const excuse = validateWhatIs4Plus4("0");
  expect(excuse).toStrictEqual(["Incorrect answer"]);
});

test("validate what is 4 plus 4 with 2", () => {
  const excuse = validateWhatIs4Plus4("2");
  expect(excuse).toStrictEqual(["Incorrect answer"]);
});
