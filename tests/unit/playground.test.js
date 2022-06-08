import { evenOrOdd, multiply } from "./playground";

describe("basic math", () => {
  it("adds two numbers", () => {
    expect(1 + 1).toBe(2);
  });

  it("substracts two numbers", () => {
    expect(2 - 1).toBe(1);
  });
});

describe("evenOrOdd", () => {
  it("return even numbers", () => {
    expect(evenOrOdd(2)).toBe("even");
  });
  it("returns an odd number", () => {
    expect(evenOrOdd(1)).toBe("odd");
  });
});

describe("multiply", () => {
  it("Multiplies two numbers together", () => {
    expect(multiply(2, 2)).toBe(4);
  });
});
