const validateWhatIs2Plus2: (answer: string) => string[] = (answer) => {
  const validationResult = [];
  if (answer !== "4") {
    validationResult.push("Incorrect answer");
  }

  return validationResult;
};

export default validateWhatIs2Plus2;
