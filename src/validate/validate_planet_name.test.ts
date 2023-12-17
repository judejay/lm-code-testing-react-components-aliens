import validatePlanetName from "../validate/validate_planet_name";

test("validate planet name with special characters", () => {
  const planetName = validatePlanetName("!neptune");
  expect(planetName).toStrictEqual(["No Special characters"]);
});

test("validate planet name too short", () => {
  const planetName = validatePlanetName("ne");
  expect(planetName).toStrictEqual(["Planet name is too short"]);
});

test("validate number of beings acceptable", () => {
  const planetName = validatePlanetName(
    "neeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
  );
  expect(planetName).toStrictEqual(["Planet Name name is too long"]);
});
