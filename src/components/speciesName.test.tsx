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

test("Validation rules pass test", () => {
  const mockValidateSpeciesName = jest.fn();
  const props = {
    speciesName: "Dolphins",
    onChangeSpeciesName: () => {},
    validate: mockValidateSpeciesName.mockReturnValue([]),
  };
  render(<SpeciesName {...props} />);

  expect(screen.queryByTestId("error")).not.toBeInTheDocument();
});
test("Validation rules fail test", () => {
  const mockValidateSpeciesName = jest.fn();
  const props = {
    speciesName: "Dolphins",
    onChangeSpeciesName: () => {},
    validate: mockValidateSpeciesName.mockReturnValue([
      "Must be between 3 and 23 characters",
    ]),
  };
  render(<SpeciesName {...props} />);

  expect(screen.getByTestId("error")).toBeInTheDocument();
});
