import { describe, expect, it } from "vitest";
import { add } from "../add";

describe("sum function", () => {
  it("should add two positive numbers correctly", () => {
    expect(add(1, 2)).toBe(3);
  });
});
