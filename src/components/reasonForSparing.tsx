import React from "react";

interface ReasonDorSparingProps {
  reasonForSparing: string;
  onChangeReasonForSparing: (value: string) => void;
}

const ReasonForSparing: React.FC<ReasonDorSparingProps> = ({
  reasonForSparing,
  onChangeReasonForSparing,
}) => {
  return (
    <>
      <label htmlFor="reasonForSparing">Reason for sparing</label>
      <textarea
        id="reasonForSparing"
        value={reasonForSparing}
        onChange={(e) => onChangeReasonForSparing(e.target.value)}
      />
    </>
  );
};
export default ReasonForSparing;
