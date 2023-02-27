import checkIfTheFirstLetterIsUppercase from "../Exercise4/checkIfTheFirstLetterIsUppercase";

test("Function checkIfTheFirstLetterIsUppercase", () => {
  expect(checkIfTheFirstLetterIsUppercase("Brasil")).toBe(true);
  expect(checkIfTheFirstLetterIsUppercase("mobiauto")).toBe(false);
  expect(checkIfTheFirstLetterIsUppercase("xXx xXx")).toBe(false);
  expect(checkIfTheFirstLetterIsUppercase("xDD")).toBe(false);
  expect(checkIfTheFirstLetterIsUppercase("Deu Certo!")).toBe(true);
});
