import { FormEvent, useState } from "react";
import W12MHeader from "./W12MHeader";
import SpeciesName from "./speciesName";
import PlanetName from "./planetName";
import NumberOfBeings from "./numberOfBeings";

export const W12MForm = () => {
  const [speciesName, setSpeciesName] = useState("dolphins");
  const [planetName, setPlanetName] = useState("");
  const [numberOfBeings, setNumberOfBeings] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    setSubmitted(true);
    console.log(speciesName + planetName + numberOfBeings);
  }

  return (
    <section className="w12MForm">
      <W12MHeader />
      <form onSubmit={handleSubmit}>
        <SpeciesName
          speciesName={speciesName}
          onChangeSpeciesName={(value) => setSpeciesName(value)}
        />
        <PlanetName
          planetName={planetName}
          onChangePlanetName={(value) => setPlanetName(value)}
        />
        <NumberOfBeings
          numberOfBeings={numberOfBeings.toLocaleString()}
          onChangeNumberOfBeings={(value) => setNumberOfBeings(parseInt(value))}
        />
        <input type="submit" value="Submit" />
      </form>
      {submitted && (
        <>
          <p>speciesName: {speciesName}</p>
          <p>planetName: {planetName}</p>
          <p>numberOfBeings: {numberOfBeings}</p>
        </>
      )}
    </section>
  );
};
