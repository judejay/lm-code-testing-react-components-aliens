import React from "react";

interface PlanetNameProps {
  planetName: string;
  onChangePlanetName: (value: string) => void;
}

const PlanetName: React.FC<PlanetNameProps> = ({
  planetName,
  onChangePlanetName,
}) => {
  return (
    <>
      <label htmlFor="planetName">Planet Name</label>
      <input
        id="planetName"
        type="text"
        value={planetName}
        onChange={(e) => onChangePlanetName(e.target.value)}
      />
    </>
  );
};
export default PlanetName;
