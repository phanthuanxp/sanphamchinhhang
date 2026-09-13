import type { Product } from "@/data/catalog";
import { Icon } from "@/components/ui/icon";

export function ProductVisual({ product, detailed = false }: { product: Product; detailed?: boolean }) {
  const symbol = product.category === "Điện tử" ? "◉" : product.category === "Gia dụng" ? "◒" : "✦";
  return <div className={`${detailed ? "detailVisual" : "productVisual"} ${product.imageTone}`}><span className={detailed ? "detailSourceBadge" : "sourceBadge"}><Icon name="shield"/> {detailed ? "Dữ liệu đã đối chiếu nguồn" : "Đã đối chiếu nguồn"}</span>{!detailed && <button aria-label={`Lưu ${product.name}`} className="saveButton"><Icon name="bookmark"/></button>}<i aria-hidden="true">{symbol}</i></div>;
}
