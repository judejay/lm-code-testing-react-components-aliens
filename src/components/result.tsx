import React from "react";
interface ResultProps {
  speciesName: string;
  planetName: string;
  numberOfBeings: number;
  reasonForSparing: string;
}

const Result: React.FC<ResultProps> = ({
  planetName,
  speciesName,
  numberOfBeings,
  reasonForSparing,
}) => {
  return (
    <>
      <p>speciesName: {speciesName}</p>
      <p>planetName: {planetName}</p>
      <p>numberOfBeings: {numberOfBeings}</p>
      <p>reasonForSparing: {reasonForSparing}</p>
    </>
  );
};

export default Result;
