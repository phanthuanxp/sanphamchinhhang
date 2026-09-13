"use client";

import { categories, products } from "@/data/catalog";
import type { Filters } from "@/lib/catalog";

export function FilterPanel({ filters, setFilters, brands }: { filters: Filters; setFilters: (filters: Filters) => void; brands: string[] }) {
  return (
    <aside className="filterPanel">
      <div className="filterTitle"><h2>Bộ lọc</h2><button onClick={() => setFilters({})}>Đặt lại</button></div>
      <label>Danh mục<select value={filters.category ?? ""} onChange={(event) => setFilters({ ...filters, category: event.target.value || undefined })}><option value="">Tất cả danh mục</option>{categories.map((category) => <option value={category.slug} key={category.slug}>{category.name}</option>)}</select></label>
      <label>Thương hiệu<select value={filters.brand ?? ""} onChange={(event) => setFilters({ ...filters, brand: event.target.value || undefined })}><option value="">Tất cả thương hiệu</option>{brands.map((brand) => <option value={brand} key={brand}>{products.find((product) => product.brandSlug === brand)?.brand}</option>)}</select></label>
      <label>Giá tham khảo<select value={filters.maxPrice?.toString() ?? ""} onChange={(event) => setFilters({ ...filters, maxPrice: event.target.value ? Number(event.target.value) : undefined })}><option value="">Mọi mức giá</option><option value="2000000">Dưới 2 triệu</option><option value="10000000">Dưới 10 triệu</option><option value="20000000">Dưới 20 triệu</option></select></label>
      <label className="checkField"><input type="checkbox" checked={filters.verifiedOnly ?? false} onChange={(event) => setFilters({ ...filters, verifiedOnly: event.target.checked })} /> Chỉ hiển thị đã đối chiếu nguồn</label>
    </aside>
  );
}
