const validateSpeciesName: (speciesName: string) => string[] = (
  speciesName
) => {
  const validationResult = [];
  if (speciesName.length >= 23) {
    validationResult.push("Species name is too long");
  }

  if (speciesName.length <= 3) {
    validationResult.push("Species name is too short");
  }
  if (speciesName.match(/\W/)) {
    validationResult.push("No Special characters");
  }
  if (/\d/.test(speciesName)) {
    validationResult.push("No numbers");
  }
  return validationResult;
};

export default validateSpeciesName;
