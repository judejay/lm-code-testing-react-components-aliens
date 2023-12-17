import { render, screen } from "@testing-library/react";
import NumberOfBeings from "./numberOfBeings";

test("renders form element", () => {
  const props = { numberOfBeings: "10", onChangeNumberOfBeings: () => {} };
  render(<NumberOfBeings {...props} />);

  const labelText = screen.getByText(/Number of Beings/i);
  expect(labelText).toBeInTheDocument();
});

test("Number of beings input field exists", () => {
  const props = {
    numberOfBeings: "10",
    onChangeNumberOfBeings: () => {},
  };
  render(<NumberOfBeings {...props} />);
  const inputField = screen.getByLabelText(/Number of Beings/i);
  expect(inputField).toBeInTheDocument();
});
