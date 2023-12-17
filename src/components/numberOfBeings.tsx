import React from "react";
import ErrorMessage from "./errorMessage";

interface NumberOfBeingsProps {
  numberOfBeings: number;
  onChangeNumberOfBeings: (value: string) => void;
  validate: (numberOfBeings: number) => string[];
}

const NumberOfBeings: React.FC<NumberOfBeingsProps> = ({
  numberOfBeings,
  onChangeNumberOfBeings,
  validate,
}) => {
  const errorMessage = validate(numberOfBeings);

  return (
    <>
      <label htmlFor="numberOfBeings">Number of Beings</label>
      <input
        id="numberOfBeings"
        type="number"
        value={numberOfBeings}
        onChange={(e) => onChangeNumberOfBeings(e.target.value)}
      />
      <ErrorMessage message={errorMessage} />
    </>
  );
};
export default NumberOfBeings;
