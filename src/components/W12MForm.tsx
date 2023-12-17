import { FormEvent, useState } from "react";
import W12MHeader from "./W12MHeader";
import SpeciesName from "./speciesName";
import PlanetName from "./planetName";
import NumberOfBeings from "./numberOfBeings";
import Result from "./result";
import ReasonForSparing from "./reasonForSparing";
import WhatIs4plus4 from "./whatIs4Plus4";
import validateSpeciesName from "../validate/validate_species_name";

const W12MForm = () => {
  const [speciesName, setSpeciesName] = useState("dolphins");
  const [planetName, setPlanetName] = useState("");
  const [numberOfBeings, setNumberOfBeings] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [reasonForSparing, setReasonForSparing] = useState("");
  const [mathCheck, setMathCheck] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    setSubmitted(true);
    console.log(speciesName + planetName + numberOfBeings);
  }

  return (
    <section className="w12MForm">
      <W12MHeader />
      <form aria-label="pity-form" onSubmit={handleSubmit}>
        <SpeciesName
          speciesName={speciesName}
          onChangeSpeciesName={(value) => setSpeciesName(value)}
          validate={validateSpeciesName}
        />
        <PlanetName
          planetName={planetName}
          onChangePlanetName={(value) => setPlanetName(value)}
        />
        <NumberOfBeings
          numberOfBeings={numberOfBeings.toLocaleString()}
          onChangeNumberOfBeings={(value) => setNumberOfBeings(parseInt(value))}
        />
        <WhatIs4plus4
          mathCheck={mathCheck}
          onChangeMathCheck={(value) => setMathCheck(value)}
        />
        <ReasonForSparing
          reasonForSparing={reasonForSparing}
          onChangeReasonForSparing={(value) => setReasonForSparing(value)}
        />
        <input name="Sign Up" type="submit" value="Submit" />
      </form>
      {submitted && (
        <Result
          speciesName={speciesName}
          planetName={planetName}
          numberOfBeings={numberOfBeings}
          reasonForSparing={reasonForSparing}
        />
      )}
    </section>
  );
};

export default W12MForm;
