const validateWhatIs4Plus4: (answer: string) => string[] = (answer) => {
  const validationResult = [];
  if (answer !== "4") {
    validationResult.push("Incorrect answer");
  }

  return validationResult;
};

export default validateWhatIs4Plus4;
