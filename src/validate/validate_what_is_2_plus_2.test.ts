import validateWhatIs2Plus2 from "./validate_what_is_2_plus_2";

test("validate what is 2 plus 2 with 7", () => {
  const excuse = validateWhatIs2Plus2("7");
  expect(excuse).toStrictEqual(["Incorrect answer"]);
});

test("validate what is 2 plus 2 with 0", () => {
  const excuse = validateWhatIs2Plus2("0");
  expect(excuse).toStrictEqual(["Incorrect answer"]);
});

test("validate what is 2 plus 2 with 2", () => {
  const excuse = validateWhatIs2Plus2("2");
  expect(excuse).toStrictEqual(["Incorrect answer"]);
});

test("validate what is 2 plus 2 with 4", () => {
  const excuse = validateWhatIs2Plus2("4");
  expect(excuse).toStrictEqual([]);
});
