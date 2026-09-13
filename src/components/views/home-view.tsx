"use client";

import Link from "next/link";
import { categories, products } from "@/data/catalog";
import { CompareTray, useCompareState } from "@/components/catalog/compare-state";
import { CategoryShortcut, ProductCard } from "@/components/catalog/product-cards";
import { SearchBar } from "@/components/catalog/search-bar";
import { MobileBottomNav, MobileHeader, SiteHeader } from "@/components/layout/navigation";
import { DesktopTrustPanel, VerificationSummary } from "@/components/layout/trust-panel";

export function HomeView() {
  const compare = useCompareState();
  return <><MobileHeader /><SiteHeader /><main><section className="homeHero"><div><p className="eyebrow">DỮ LIỆU CÓ NGUỒN · GIÁ CÓ THỜI ĐIỂM</p><h1>Tìm đúng sản phẩm.<br /><em>Chọn đúng nơi mua.</em></h1><p>Tra cứu thông tin nguồn gốc, so sánh sản phẩm và tìm nơi bán uy tín để an tâm hơn trong mỗi lựa chọn.</p><SearchBar /><div className="quickTerms"><span>Gợi ý tìm kiếm:</span>{["iPhone 15", "Samsung Galaxy S24", "LocknLock", "La Roche-Posay"].map((term) => <Link href={`/danh-muc/dien-tu?q=${term}`} key={term}>{term}</Link>)}</div></div><DesktopTrustPanel /></section><section className="homeCategories">{categories.map((category) => <CategoryShortcut category={category} key={category.slug} />)}</section><div className="mobileOnly"><VerificationSummary /></div><section className="contentSection"><div className="sectionHeading"><div><p className="eyebrow">ĐÃ ĐỐI CHIẾU NGUỒN</p><h2>Được quan tâm</h2><span>Sản phẩm được nhiều người tìm kiếm và so sánh</span></div><Link href="/danh-muc/dien-tu">Xem thêm ›</Link></div><div className="productGrid homeProducts">{products.slice(0, 4).map((product) => <ProductCard product={product} comparisonIds={compare.ids} onToggle={compare.toggle} key={product.id} />)}</div></section><section className="knowledgeBanner"><p>TÌM HIỂU KIẾN THỨC</p><h2>Chọn hàng chính hãng<br />Sống an tâm mỗi ngày</h2><span>Kiến thức thật. Lựa chọn thông minh.</span><i>›</i></section><DesktopTrustPanel full /><CompareTray selected={compare.selected} onRemove={compare.remove} onClear={compare.clear} error={compare.error} /></main><MobileBottomNav /></>;
}
