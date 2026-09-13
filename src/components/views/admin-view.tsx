import { products } from "@/data/catalog";
import { AdminDataTable, AdminHeader, AdminSidebar } from "@/components/admin/admin-components";

export function AdminView({ title, type = "Sản phẩm" }: { title: string; type?: string }) {
  return <div className="adminShell"><AdminSidebar /><main className="adminMain"><AdminHeader title={title} />{title === "Tổng quan" ? <div className="adminDashboard"><div className="metric"><small>Sản phẩm mẫu</small><strong>{products.length}</strong></div><div className="metric"><small>Chờ kiểm duyệt</small><strong>4</strong></div><div className="metric"><small>Nơi mua tham khảo</small><strong>12</strong></div><section><h2>Việc cần xử lý</h2><p>Đây là khung quản trị Sprint 1. Đăng nhập, phân quyền và dữ liệu thật sẽ được xây ở Sprint 2.</p></section></div> : <AdminDataTable type={type} />}</main></div>;
}
