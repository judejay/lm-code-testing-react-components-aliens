import validateReasonForSparing from "./validate_reason_for_sparing";

test("validate reason for sparing to short", () => {
  const excuse = validateReasonForSparing("no reason");
  expect(excuse).toStrictEqual(["Reason for sparing is too short"]);
});

test("validate validate reason for sparing is acceptable", () => {
  const planetName = validateReasonForSparing(
    "not my fault not my fault not my fault not my fault"
  );
  expect(planetName).toStrictEqual([]);
});

test("validate reason for sparing to long", () => {
  const planetName = validateReasonForSparing(
    "not my fault not my fault not my fault not my fault, not my fault not my fault not my fault not my fault, not my fault not my fault not my fault not my fault, not my fault not my fault not my fault not my fault, not my fault not my fault not my fault not my fault"
  );
  expect(planetName).toStrictEqual(["Reason for sparing is too long"]);
});
