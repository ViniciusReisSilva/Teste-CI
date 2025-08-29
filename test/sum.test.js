import { test, expect, describe } from "vitest";
import sum from "./sum.js";



describe("sum", () => {
  test("adds two numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("adds negative numbers", () => {
    expect(sum(-1, -2)).toBe(-3);
  });

  test("sum letters", () => {
    expect(sum("a", "b")).toBe("ab");
  });
});
