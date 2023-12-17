import { render, screen } from "@testing-library/react";
import NumberOfBeings from "./numberOfBeings";

test("renders form element", () => {
  const props = { numberOfBeings: "10", onChangeNumberOfBeings: () => {} };
  render(<NumberOfBeings {...props} />);

  const labelText = screen.getByText(/Number of Beings/i);
  expect(labelText).toBeInTheDocument();
});
