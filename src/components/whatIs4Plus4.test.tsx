import { render, screen } from "@testing-library/react";
import WhatIs4Plus4 from "./whatIs4plus4";

test("renders label for math check", () => {
  const requiredProps = {
    mathCheck: "2",
    onChangeMathCheck: () => {},
  };
  render(<WhatIs4Plus4 {...requiredProps} />);

  const labelText = screen.getByText("What is 2 + 2?");
  expect(labelText).toBeInTheDocument();
});
