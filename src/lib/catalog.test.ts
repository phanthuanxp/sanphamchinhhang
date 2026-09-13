import { describe, expect, it } from "vitest";
import { products } from "../data/catalog";
import { filterProducts, findCheckProduct, searchProducts, toggleComparison } from "./catalog";

describe("catalog prototype logic", () => {
  it("searches by product, brand, and model", () => {
    expect(searchProducts(products, "xiaomi")).toHaveLength(1);
    expect(searchProducts(products, "SM-S921B")[0]?.brand).toBe("Samsung");
  });
  it("filters by category, price and source status", () => {
    expect(filterProducts(products, { category: "gia-dung", maxPrice: 2_000_000, verifiedOnly: true })).toHaveLength(1);
  });
  it("adds and removes comparison items", () => {
    expect(toggleComparison(["a"], "b").ids).toEqual(["a", "b"]);
    expect(toggleComparison(["a", "b"], "a").ids).toEqual(["b"]);
  });
  it("prevents a fifth comparison item", () => {
    const result = toggleComparison(["a", "b", "c", "d"], "e");
    expect(result.ids).toHaveLength(4);
    expect(result.error).toMatch(/tối đa 4/);
  });
  it("does not check blank or whitespace-only input", () => {
    expect(findCheckProduct(products, "")).toBeNull();
    expect(findCheckProduct(products, "   ")).toBeNull();
  });
});
