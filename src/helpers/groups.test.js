const sum = (a, b) => {
  return a + b;
};

describe("Group creation", () => {
  test("sum", () => {
    expect(sum(1, 2)).toEqual(3);
  });
});
