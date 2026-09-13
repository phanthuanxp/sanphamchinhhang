import { describe, expect, it } from "vitest";
import { products } from "../data/catalog";
import { filterProducts, findCheckProduct, sanitizeComparisonIds, searchProducts, toggleComparison } from "./catalog";
import { isNavigationActive } from "./navigation";

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
  it("sanitizes malformed comparison storage values", () => {
    const ids = new Set(products.map((product) => product.id));
    expect(sanitizeComparisonIds({ ids: [] }, ids)).toEqual([]);
    expect(sanitizeComparisonIds(["iphone-15", "missing", 1, "galaxy-s24", "bose-qc", "xiaomi-air", "lrp-serum"], ids)).toEqual(["iphone-15", "galaxy-s24", "bose-qc", "xiaomi-air"]);
  });
  it("sets navigation active by route section", () => {
    expect(isNavigationActive("/", "/")).toBe(true);
    expect(isNavigationActive("/kiem-tra", "/")).toBe(false);
    expect(isNavigationActive("/danh-muc/gia-dung", "/danh-muc/dien-tu")).toBe(true);
    expect(isNavigationActive("/so-sanh", "/kiem-tra")).toBe(false);
  });
});
