import { render, screen } from "@testing-library/react";
import PlanetName from "./planetName";

test("renders form element", () => {
  const props = { planetName: "earth", onChangePlanetName: () => {} };
  render(<PlanetName {...props} />);

  const labelText = screen.getByText(/Planet Name/i);
  expect(labelText).toBeInTheDocument();
});

test("Planet name input field exists", () => {
  const props = {
    planetName: "Earth",
    onChangePlanetName: () => {},
  };
  render(<PlanetName {...props} />);
  const inputField = screen.getByLabelText(/Planet Name/i);
  expect(inputField).toBeInTheDocument();
});
