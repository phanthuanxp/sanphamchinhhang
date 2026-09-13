"use client";

import Link from "next/link";
import { products } from "@/data/catalog";
import { CompareTray, useCompareState } from "@/components/catalog/compare-state";
import { BrandCard, ProductCard } from "@/components/catalog/product-cards";
import { MobileBottomNav, SiteHeader } from "@/components/layout/navigation";

export function BrandView({ slug }: { slug: string }) {
  const compare = useCompareState();
  const brandProducts = products.filter((product) => product.brandSlug === slug);
  const brand = brandProducts[0]?.brand ?? "Thương hiệu";
  return <><SiteHeader /><main className="brandPage"><p className="eyebrow">THƯƠNG HIỆU · DỮ LIỆU MẪU</p><h1>{brand}</h1><p>Thông tin thương hiệu và sản phẩm được hiển thị để trải nghiệm prototype. Người dùng cần kiểm tra nguồn chính thức trước khi mua.</p><Link className="brandOfficial" href="#sources">↗ Xem nguồn thông tin</Link><section><div className="sectionHeading"><h2>Sản phẩm tham khảo</h2><span>{brandProducts.length} sản phẩm</span></div>{brandProducts.length ? <div className="productGrid">{brandProducts.map((product) => <ProductCard product={product} comparisonIds={compare.ids} onToggle={compare.toggle} key={product.id} />)}</div> : <div className="brandList">{["Apple", "Samsung", "Xiaomi", "LocknLock", "Bose"].map((item) => <BrandCard brand={item} key={item} />)}</div>}</section><section id="sources" className="sourceNote"><strong>Phạm vi xác minh</strong><p>Nội dung chỉ mô tả trạng thái đối chiếu nguồn của dữ liệu mẫu, không phải xác nhận độc lập về hàng hóa.</p></section></main><CompareTray selected={compare.selected} onRemove={compare.remove} onClear={compare.clear} error={compare.error} /><MobileBottomNav /></>;
}
