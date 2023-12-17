import { render, screen } from "@testing-library/react";
import WhatIs4Plus4 from "./whatIs4Plus4";

test("renders label for math check", () => {
  const requiredProps = {
    mathCheck: "2",
    onChangeMathCheck: () => {},
    validate: () => [],
  };
  render(<WhatIs4Plus4 {...requiredProps} />);

  const labelText = screen.getByText("What is 2 + 2?");
  expect(labelText).toBeInTheDocument();
});
test("Validation rules pass test", () => {
  const mockValidateWhatIs4Plus4 = jest.fn();
  const props = {
    mathCheck: "2",
    onChangeMathCheck: () => {},
    validate: mockValidateWhatIs4Plus4.mockReturnValue([]),
  };
  render(<WhatIs4Plus4 {...props} />);

  expect(screen.queryByTestId("error")).not.toBeInTheDocument();
});
test("Validation rules fail test", () => {
  const mockValidateWhatIs4Plus4 = jest.fn();

  const props = {
    mathCheck: "2",
    onChangeMathCheck: () => {},
    validate: mockValidateWhatIs4Plus4.mockReturnValue(["Incorrect answer"]),
  };
  render(<WhatIs4Plus4 {...props} />);

  expect(screen.getByTestId("error")).toBeInTheDocument();
});
