import { render, screen } from "@testing-library/react";
import ReasonForSparing from "./reasonForSparing";

test("renders form element", () => {
  const props = {
    reasonForSparing: "no reason",
    onChangeReasonForSparing: () => {},
    validate: () => [],
  };
  render(<ReasonForSparing {...props} />);

  const labelText = screen.getByText(/Reason for sparing/i);
  expect(labelText).toBeInTheDocument();
});

test("Reason for sparing input field exists", () => {
  const props = {
    reasonForSparing: "no reason",
    onChangeReasonForSparing: () => {},
    validate: () => [],
  };
  render(<ReasonForSparing {...props} />);
  const inputField = screen.getByLabelText(/Reason for sparing/i);
  expect(inputField).toBeInTheDocument();
});

test("Reason for sparing  input field displays value passed in through props", () => {
  const props = {
    reasonForSparing: "no reason",
    onChangeReasonForSparing: () => {},
    validate: () => [],
  };
  render(<ReasonForSparing {...props} />);
  const inputField: HTMLInputElement =
    screen.getByLabelText(/Reason for sparing/i);
  expect(inputField.value).toBe("no reason");
});
test("Validation rules pass test", () => {
  const mockValidateReasonForSparing = jest.fn();
  const props = {
    reasonForSparing: "no reason",
    onChangeReasonForSparing: () => {},
    validate: mockValidateReasonForSparing.mockReturnValue([]),
  };
  render(<ReasonForSparing {...props} />);

  expect(screen.queryByTestId("error")).not.toBeInTheDocument();
});
test("Validation rules fail test", () => {
  const mockValidateReasonForSparing = jest.fn();
  const props = {
    reasonForSparing: "no reason",
    onChangeReasonForSparing: () => {},
    validate: mockValidateReasonForSparing.mockReturnValue([
      "Must be more than 17 characters",
    ]),
  };
  render(<ReasonForSparing {...props} />);

  expect(screen.getByTestId("error")).toBeInTheDocument();
});
