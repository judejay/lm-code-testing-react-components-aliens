import { render, screen } from "@testing-library/react";
import PlanetName from "./planetName";

test("renders form element", () => {
  const props = {
    planetName: "earth",
    onChangePlanetName: () => {},
    validate: () => [],
  };
  render(<PlanetName {...props} />);

  const labelText = screen.getByText(/Planet Name/i);
  expect(labelText).toBeInTheDocument();
});

test("Planet name input field exists", () => {
  const props = {
    planetName: "Earth",
    onChangePlanetName: () => {},
    validate: () => [],
  };
  render(<PlanetName {...props} />);
  const inputField = screen.getByLabelText(/Planet Name/i);
  expect(inputField).toBeInTheDocument();
});

test("Planet name input field displays value passed in through props", () => {
  const props = {
    planetName: "Earth",
    onChangePlanetName: () => {},
    validate: () => [],
  };
  render(<PlanetName {...props} />);
  const inputField: HTMLInputElement = screen.getByLabelText(/Planet Name/i);
  expect(inputField.value).toBe("Earth");
});

test("Validation rules pass test", () => {
  const mockValidatePlanetName = jest.fn();
  const props = {
    planetName: "Earth",
    onChangePlanetName: () => {},
    validate: mockValidatePlanetName.mockReturnValue([]),
  };
  render(<PlanetName {...props} />);

  expect(screen.queryByTestId("error")).not.toBeInTheDocument();
});
test("Validation rules fail test", () => {
  const mockValidatePlanetName = jest.fn();
  const props = {
    planetName: "Earth",
    onChangePlanetName: () => {},
    validate: mockValidatePlanetName.mockReturnValue([
      "Must not contain special characters",
    ]),
  };
  render(<PlanetName {...props} />);

  expect(screen.getByTestId("error")).toBeInTheDocument();
});
