import React from "react";
import ErrorMessage from "./errorMessage";

interface ReasonDorSparingProps {
  reasonForSparing: string;
  onChangeReasonForSparing: (value: string) => void;
  validate: (name: string) => string[];
}

const ReasonForSparing: React.FC<ReasonDorSparingProps> = ({
  reasonForSparing,
  onChangeReasonForSparing,
  validate,
}) => {
  const errorMessage = validate(reasonForSparing);

  return (
    <>
      <label htmlFor="reasonForSparing">Reason for sparing</label>
      <textarea
        id="reasonForSparing"
        value={reasonForSparing}
        onChange={(e) => onChangeReasonForSparing(e.target.value)}
      />
      <ErrorMessage message={errorMessage} />
    </>
  );
};
export default ReasonForSparing;
