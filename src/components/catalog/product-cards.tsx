import Link from "next/link";
import { categories, formatPrice, products, type Product } from "@/data/catalog";
import { CompareButton } from "@/components/catalog/compare-state";
import { ProductVisual } from "@/components/catalog/product-visual";

export function CategoryShortcut({ category }: { category: (typeof categories)[number] }) {
  return <Link className="categoryShortcut" href={`/danh-muc/${category.slug}`}><i aria-hidden="true">{category.icon}</i><strong>{category.name}</strong><small>{category.description}</small><span aria-hidden="true">›</span></Link>;
}

export function ProductCard({ product, comparisonIds, onToggle }: { product: Product; comparisonIds: string[]; onToggle: (product: Product) => void }) {
  const selected = comparisonIds.includes(product.id);
  return (
    <article className="productCard">
      <ProductVisual product={product} />
      <div className="productBody">
        <p className="productMeta">{product.model} · {product.brand}</p>
        <Link href={`/san-pham/${product.slug}`}><h3>{product.name}</h3></Link>
        <p className="productDescription">{product.description}</p>
        <strong className="productPrice">{formatPrice(product.price)}</strong>
        <Link className="sellerCount" href={`/san-pham/${product.slug}`}>{product.offers.length + 8} nơi bán uy tín <span aria-hidden="true">›</span></Link>
        <CompareButton product={product} selected={selected} onToggle={onToggle} />
      </div>
    </article>
  );
}

export function BrandCard({ brand }: { brand: string }) {
  const product = products.find((item) => item.brand === brand);
  const count = products.filter((item) => item.brand === brand).length;
  return <Link href={`/thuong-hieu/${product?.brandSlug ?? "apple"}`} className="brandCard"><b>{brand.slice(0, 1)}</b><span><strong>{brand}</strong><small>{count} sản phẩm dữ liệu mẫu</small></span><i aria-hidden="true">›</i></Link>;
}

export function SellerOfferCard({ offer }: { offer: Product["offers"][number] }) {
  return <article className="offerCard"><div><strong>{offer.seller}</strong><p>{offer.kind} · Cập nhật {offer.updatedAt}</p></div><div><b>{formatPrice(offer.price)}</b><button type="button">Xem nơi mua</button></div></article>;
}
