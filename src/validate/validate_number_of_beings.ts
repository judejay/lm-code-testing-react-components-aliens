const validateNumberOfBeings: (numberOfBeings: number) => string[] = (
  numberOfBeings
) => {
  const validationResult = [];
  if (numberOfBeings <= 1000000000) {
    validationResult.push("Number of beings is too small");
  }

  return validationResult;
};

export default validateNumberOfBeings;
