import Link from "next/link";
import { categories, products } from "@/data/catalog";

export function AdminSidebar() {
  const links = [["/admin", "Tổng quan"], ["/admin/san-pham", "Sản phẩm"], ["/admin/danh-muc", "Danh mục"], ["/admin/thuong-hieu", "Thương hiệu"], ["/admin/noi-mua", "Nơi mua"], ["/admin/kiem-duyet", "Kiểm duyệt"]];
  return <aside className="adminSidebar"><Link className="wordmark" href="/"><b>SP</b><span>ADMIN<small>Prototype</small></span></Link>{links.map(([href, label]) => <Link href={href} key={href}>{label}</Link>)}</aside>;
}

export function AdminHeader({ title }: { title: string }) {
  return <header className="adminHeader"><div><small>CMS DỮ LIỆU MẪU</small><h1>{title}</h1></div><Link href="/" className="headerCta">Xem website ↗</Link></header>;
}

export function AdminDataTable({ type }: { type: string }) {
  const rows: { name: string; detail: string }[] = type === "Sản phẩm" ? products.map((product) => ({ name: product.name, detail: product.model })) : type === "Danh mục" ? categories.map((category) => ({ name: category.name, detail: category.description })) : [...new Set(products.map((product) => product.brand))].map((name) => ({ name, detail: "Dữ liệu mẫu chờ kết nối CMS" }));
  return <div className="adminTable"><div className="tableToolbar"><input aria-label="Tìm trong bảng" placeholder={`Tìm ${type.toLowerCase()}...`} /><button>+ Thêm dữ liệu mẫu</button></div><table><thead><tr><th>Tên</th><th>Trạng thái</th><th>Cập nhật</th><th>Thao tác</th></tr></thead><tbody>{rows.map((row) => <tr key={row.name}><td><strong>{row.name}</strong><small>{row.detail}</small></td><td><span className="status">Đã đối chiếu nguồn</span></td><td>12/09/2026</td><td><button>⋯</button></td></tr>)}</tbody></table></div>;
}
