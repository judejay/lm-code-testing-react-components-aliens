import { render, screen } from "@testing-library/react";
import SpeciesName from "./speciesName";

test("renders form element", () => {
  const props = {
    speciesName: "Dolphins",
    onChangeSpeciesName: () => {},
    validate: () => [],
  };
  render(<SpeciesName {...props} />);

  const labelText = screen.getByText(/Species Name/i);
  expect(labelText).toBeInTheDocument();
});

test("Species Name input field exists", () => {
  const props = {
    speciesName: "Dolphins",
    onChangeSpeciesName: () => {},
    validate: () => [],
  };
  render(<SpeciesName {...props} />);
  const inputField = screen.getByLabelText(/Species Name/i);
  expect(inputField).toBeInTheDocument();
});

test("Species Name input field displays value passed in through props", () => {
  const props = {
    speciesName: "Dolphins",
    onChangeSpeciesName: () => {},
    validate: () => [],
  };
  render(<SpeciesName {...props} />);
  const inputField: HTMLInputElement = screen.getByLabelText(/Species Name/i);
  expect(inputField.value).toBe("Dolphins");
});
