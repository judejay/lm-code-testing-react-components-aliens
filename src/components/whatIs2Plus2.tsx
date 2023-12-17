import ErrorMessage from "./errorMessage";

interface WhatIs2plus2Props {
  mathCheck: string;
  onChangeMathCheck: (value: string) => void;
  validate: (answer: string) => string[];
}

const WhatIs2plus2: React.FC<WhatIs2plus2Props> = ({
  mathCheck,
  onChangeMathCheck,
  validate,
}) => {
  const errorMessage = validate(mathCheck);

  return (
    <>
      <label htmlFor="mathCheck">What is 2 + 2?</label>
      <select
        value={mathCheck}
        onChange={(e) => onChangeMathCheck(e.target.value)}
      >
        <option value="not4">Not 4</option>
        <option value="0">0</option>
        <option value="4">4</option>
        <option value="99">99</option>
      </select>
      <ErrorMessage message={errorMessage} />
    </>
  );
};
export default WhatIs2plus2;
