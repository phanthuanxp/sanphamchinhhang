"use client";

import { useMemo, useState } from "react";
import { products } from "@/data/catalog";
import { filterProducts, type Filters } from "@/lib/catalog";
import { CompareTray, useCompareState } from "@/components/catalog/compare-state";
import { FilterPanel } from "@/components/catalog/filter-panel";
import { ProductCard } from "@/components/catalog/product-cards";
import { SearchBar } from "@/components/catalog/search-bar";
import { NoResultState } from "@/components/states/feedback-states";

export function CatalogView({ initialCategory, initialQuery = "" }: { initialCategory?: string; initialQuery?: string }) {
  const [filters, setFilters] = useState<Filters>({ category: initialCategory, query: initialQuery });
  const compare = useCompareState();
  const results = useMemo(() => filterProducts(products, filters), [filters]);
  const brands = [...new Set(products.map((product) => product.brandSlug))];

  return <><section className="catalogHero"><p className="eyebrow">KHÁM PHÁ DỮ LIỆU MẪU</p><h1>Tìm và so sánh<br />có căn cứ.</h1><SearchBar compact /><p>Thông tin giá và nơi mua chỉ để trải nghiệm prototype, luôn kèm thời điểm cập nhật.</p></section><main className="catalogLayout"><FilterPanel filters={filters} setFilters={setFilters} brands={brands} /><section className="catalogResults"><div className="resultHeader"><div><p>{results.length} kết quả</p><h2>Sản phẩm tham khảo</h2></div><label className="mobileSearch">Từ khóa<input value={filters.query ?? ""} onChange={(event) => setFilters({ ...filters, query: event.target.value })} /></label></div>{results.length ? <div className="productGrid">{results.map((product) => <ProductCard key={product.id} product={product} comparisonIds={compare.ids} onToggle={compare.toggle} />)}</div> : <NoResultState />}</section></main><CompareTray selected={compare.selected} onRemove={compare.remove} onClear={compare.clear} error={compare.error} /></>;
}
