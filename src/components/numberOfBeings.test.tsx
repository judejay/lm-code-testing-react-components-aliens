import { render, screen } from "@testing-library/react";
import NumberOfBeings from "./numberOfBeings";

test("renders form element", () => {
  const props = {
    numberOfBeings: 10,
    onChangeNumberOfBeings: () => {},
    validate: () => [],
  };
  render(<NumberOfBeings {...props} />);

  const labelText = screen.getByText(/Number of Beings/i);
  expect(labelText).toBeInTheDocument();
});

test("Number of beings input field exists", () => {
  const props = {
    numberOfBeings: 10,
    onChangeNumberOfBeings: () => {},
    validate: () => [],
  };
  render(<NumberOfBeings {...props} />);
  const inputField = screen.getByLabelText(/Number of Beings/i);
  expect(inputField).toBeInTheDocument();
});

test("Number of beings  input field displays value passed in through props", () => {
  const props = {
    numberOfBeings: 10,
    onChangeNumberOfBeings: () => {},
    validate: () => [],
  };
  render(<NumberOfBeings {...props} />);
  const inputField: HTMLInputElement =
    screen.getByLabelText(/Number of Beings/i);
  expect(inputField.value).toBe("10");
});
test("Validation rules pass test", () => {
  const mockNumberOfBeings = jest.fn();
  const props = {
    numberOfBeings: 10,
    onChangeNumberOfBeings: () => {},
    validate: mockNumberOfBeings.mockReturnValue([]),
  };
  render(<NumberOfBeings {...props} />);

  expect(screen.queryByTestId("error")).not.toBeInTheDocument();
});
test("Validation rules fail test", () => {
  const mockNumberOfBeings = jest.fn();
  const props = {
    numberOfBeings: 10,
    onChangeNumberOfBeings: () => {},
    validate: mockNumberOfBeings.mockReturnValue([
      "Must be between more than 10 milliom",
    ]),
  };
  render(<NumberOfBeings {...props} />);

  expect(screen.getByTestId("error")).toBeInTheDocument();
});
