import { render, screen } from "@testing-library/react";
import ReasonForSparing from "./reasonForSparing";

test("renders form element", () => {
  const props = {
    reasonForSparing: "no reason",
    onChangeReasonForSparing: () => {},
  };
  render(<ReasonForSparing {...props} />);

  const labelText = screen.getByText(/Reason for sparing/i);
  expect(labelText).toBeInTheDocument();
});
