import React from "react";

interface NumberOfBeingsProps {
  numberOfBeings: string;
  onChangeNumberOfBeings: (value: string) => void;
}

const NumberOfBeings: React.FC<NumberOfBeingsProps> = ({
  numberOfBeings,
  onChangeNumberOfBeings,
}) => {
  return (
    <>
      <label htmlFor="numberOfBeings">Number of Beings</label>
      <input
        id="numberOfBeings"
        type="number"
        value={numberOfBeings}
        onChange={(e) => onChangeNumberOfBeings(e.target.value)}
      />
    </>
  );
};
export default NumberOfBeings;
