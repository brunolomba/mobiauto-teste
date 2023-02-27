import maskify from "../Exercise1/maskify";

test("Function maskify", () => {
  expect(maskify("4556364607935616")).toBe("############5616");
  expect(maskify("64607935616")).toBe("#######5616");
  expect(maskify("1")).toBe("1");
  expect(maskify("")).toBe("");
  expect(maskify("Skippy")).toBe("##ippy");
  expect(maskify("Nanananananananananana Batman!")).toBe(
    "##########################man!"
  );
});
