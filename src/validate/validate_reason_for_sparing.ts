const validateReasonForSparing: (reasonForSparing: string) => string[] = (
  reasonForSparing
) => {
  const validationResult = [];
  if (reasonForSparing.length >= 153) {
    validationResult.push("Reason for sparing is too long");
  }

  if (reasonForSparing.length <= 17) {
    validationResult.push("Reason for sparing is too short");
  }

  return validationResult;
};

export default validateReasonForSparing;
