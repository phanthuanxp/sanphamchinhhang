"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mobileNavigationItems, isNavigationActive } from "@/lib/navigation";

export function SiteHeader() {
  const pathname = usePathname();
  const links = [
    ["/danh-muc/dien-tu", "Danh mục"],
    ["/thuong-hieu/apple", "Thương hiệu"],
    ["/kiem-tra", "Cách kiểm tra"],
    ["/so-sanh", "So sánh"],
  ];

  return (
    <header className="siteHeader">
      <Link className="wordmark" href="/">
        <b>SP</b>
        <span>SẢN PHẨM CHÍNH HÃNG<small>Thông tin thật. Lựa chọn đúng.</small></span>
      </Link>
      <nav aria-label="Điều hướng chính">
        {links.map(([href, label]) => {
          const active = isNavigationActive(pathname, href);
          return <Link href={href} key={href} className={active ? "active" : undefined} aria-current={active ? "page" : undefined}>{label}</Link>;
        })}
      </nav>
      <div className="headerActions">
        <Link aria-label="Tìm kiếm" href="/danh-muc/dien-tu">⌕</Link>
        <Link className="headerCta" href="/admin/dang-nhap">Dành cho thương hiệu</Link>
      </div>
    </header>
  );
}

export function MobileHeader() {
  return (
    <header className="mobileHeader">
      <Link className="mobileLogo" href="/"><b>SP</b><span>SẢN PHẨM<br />CHÍNH HÃNG</span></Link>
      <span className="mobileMotto">Sản phẩm thật<br />Cuộc sống tốt hơn</span>
      <div><button aria-label="Sản phẩm đã lưu">♡</button><button aria-label="Thông báo">♧</button></div>
    </header>
  );
}

export function BarcodeScanButton() {
  return <Link className="scanButton" href="/kiem-tra" aria-label="Quét barcode hoặc model">⌗<span>Quét mã</span></Link>;
}

export function MobileBottomNav() {
  const pathname = usePathname();
  return (
    <nav className="bottomNav" aria-label="Điều hướng mobile">
      {mobileNavigationItems.map((item) => {
        const active = isNavigationActive(pathname, item.href);
        return (
          <Link key={item.href} href={item.href} className={`${item.mobileClassName ?? ""} ${active ? "active" : ""}`.trim()} aria-current={active ? "page" : undefined}>
            <span aria-hidden="true">{item.icon}</span><span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
