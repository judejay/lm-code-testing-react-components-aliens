const validatePlanetName: (planetName: string) => string[] = (planetName) => {
  const validationResult = [];
  if (planetName.length >= 49) {
    validationResult.push("Planet Name name is too long");
  }

  if (planetName.length <= 2) {
    validationResult.push("Planet name is too short");
  }
  if (planetName.match(/\W/)) {
    validationResult.push("No Special characters");
  }

  return validationResult;
};

export default validatePlanetName;
