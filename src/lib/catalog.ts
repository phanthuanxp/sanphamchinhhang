import type { Product } from "../data/catalog";

export type Filters = { query?: string; category?: string; brand?: string; maxPrice?: number; verifiedOnly?: boolean };

export function searchProducts(products: Product[], query: string) {
  const needle = query.trim().toLocaleLowerCase("vi");
  if (!needle) return products;
  return products.filter((product) => [product.name, product.brand, product.model, product.category].some((value) => value.toLocaleLowerCase("vi").includes(needle)));
}

export function filterProducts(products: Product[], filters: Filters) {
  return searchProducts(products, filters.query ?? "").filter((product) =>
    (!filters.category || product.categorySlug === filters.category) &&
    (!filters.brand || product.brandSlug === filters.brand) &&
    (!filters.maxPrice || product.price <= filters.maxPrice) &&
    (!filters.verifiedOnly || product.verification === "source_checked"));
}

export function toggleComparison(ids: string[], id: string, maximum = 4) {
  if (ids.includes(id)) return { ids: ids.filter((value) => value !== id), error: null };
  if (ids.length >= maximum) return { ids, error: `Bạn chỉ có thể so sánh tối đa ${maximum} sản phẩm.` };
  return { ids: [...ids, id], error: null };
}
