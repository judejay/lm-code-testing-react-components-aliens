import React from "react";
import ErrorMessage from "./errorMessage";

interface PlanetNameProps {
  planetName: string;
  onChangePlanetName: (value: string) => void;
  validate: (planetName: string) => string[];
}

const PlanetName: React.FC<PlanetNameProps> = ({
  planetName,
  onChangePlanetName,
  validate,
}) => {
  const errorMessage = validate(planetName);

  return (
    <>
      <label htmlFor="planetName">Planet Name</label>
      <input
        id="planetName"
        type="text"
        value={planetName}
        onChange={(e) => onChangePlanetName(e.target.value)}
      />
      <ErrorMessage message={errorMessage} />
    </>
  );
};
export default PlanetName;
