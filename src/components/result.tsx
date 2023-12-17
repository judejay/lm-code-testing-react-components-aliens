import React from "react";
interface ResultProps {
  speciesName: string;
  planetName: string;
  numberOfBeings: number;
}

const Result: React.FC<ResultProps> = ({
  planetName,
  speciesName,
  numberOfBeings,
}) => {
  return (
    <>
      <p>speciesName: {speciesName}</p>
      <p>planetName: {planetName}</p>
      <p>numberOfBeings: {numberOfBeings}</p>
    </>
  );
};

export default Result;
