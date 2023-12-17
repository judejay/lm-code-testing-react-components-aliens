import { render, screen, fireEvent } from "@testing-library/react";
import W12MForm from "./W12MForm";

test("renders form element", () => {
  // we can hold onto the object returned from render()
  // this object has a container property that we can destructure and inspect
  const { container } = render(<W12MForm />);

  // the container is just a normal DOM element, so we can look at normal properties like '.firstChild'
  // for example, the firstChild of our container should be our form element
  expect(container.firstChild).toHaveClass("w12MForm");
});

test("submit button calls function", () => {
  const renderComponent = () => {
    return render(<W12MForm />);
  };
  const handleOnSubmitMock = jest.fn();

  renderComponent();
  screen.getByRole("form", { name: "pity-form" }).onsubmit = handleOnSubmitMock;

  fireEvent.click(screen.getByRole("button", { name: "Submit" }));

  expect(handleOnSubmitMock).toHaveBeenCalled();
});
