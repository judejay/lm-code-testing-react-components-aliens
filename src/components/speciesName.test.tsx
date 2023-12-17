import { render, screen } from "@testing-library/react";
import SpeciesName from "./speciesName";

test("renders form element", () => {
  const props = { speciesName: "Dolphins", onChangeSpeciesName: () => {} };
  render(<SpeciesName {...props} />);

  const labelText = screen.getByText(/Species Name/i);
  expect(labelText).toBeInTheDocument();
});

test("Species Name input field exists", () => {
  const props = {
    speciesName: "Dolphins",
    onChangeSpeciesName: () => {},
  };
  render(<SpeciesName {...props} />);
  const inputField = screen.getByLabelText(/Species Name/i);
  expect(inputField).toBeInTheDocument();
});
