"use client";

import Link from "next/link";
import { formatPrice } from "@/data/catalog";
import { useCompareState } from "@/components/catalog/compare-state";
import { MobileBottomNav, SiteHeader } from "@/components/layout/navigation";
import { EmptyState } from "@/components/states/feedback-states";

export function ComparisonView() {
  const compare = useCompareState();
  const items = compare.selected;
  const labels = ["Giá tham khảo", "Thương hiệu", "Model", "Bảo hành", ...Array.from(new Set(items.flatMap((item) => Object.keys(item.specs))))];
  return <><SiteHeader /><main className="comparisonPage"><p className="eyebrow">SO SÁNH DỮ LIỆU MẪU</p><h1>Đặt các lựa chọn cạnh nhau</h1><p>So sánh tối đa 4 sản phẩm. Giá và nơi mua là thông tin tham khảo tại thời điểm cập nhật.</p>{items.length ? <div className="comparisonTable"><div className="comparisonRow heads"><b>Tiêu chí</b>{items.map((item) => <div key={item.id}><button onClick={() => compare.remove(item.id)} aria-label={`Xóa ${item.name}`}>×</button><Link href={`/san-pham/${item.slug}`}>{item.name}</Link></div>)}</div>{labels.map((label) => <div className="comparisonRow" key={label}><b>{label}</b>{items.map((item) => <span key={item.id}>{label === "Giá tham khảo" ? formatPrice(item.price) : label === "Thương hiệu" ? item.brand : label === "Model" ? item.model : label === "Bảo hành" ? item.warranty : item.specs[label] ?? "—"}</span>)}</div>)}</div> : <EmptyState title="Chưa chọn sản phẩm để so sánh" detail="Vào danh mục và bấm “So sánh” trên tối đa bốn sản phẩm." />}</main><MobileBottomNav /></>;
}
