import validateSpeciesName from "./validate_species_name";

test("validate species name too short", () => {
  const excuse = validateSpeciesName("pig");
  expect(excuse).toStrictEqual(["Species name is too short"]);
});

test("validate species name is acceptable", () => {
  const planetName = validateSpeciesName("Dolphins");
  expect(planetName).toStrictEqual([]);
});

test("validate species name too long", () => {
  const planetName = validateSpeciesName(
    "ParastratiosphecomyiastratiosphecomyioidesBrunetti"
  );
  expect(planetName).toStrictEqual(["Species name is too long"]);
});
test("validate species name can't contain numbers too long", () => {
  const planetName = validateSpeciesName("Alien3");
  expect(planetName).toStrictEqual(["No numbers"]);
});

test("validate species name can't contain special characters", () => {
  const planetName = validateSpeciesName("Alien!");
  expect(planetName).toStrictEqual(["No Special characters"]);
});
