export type NavigationItem = {
  href: string;
  icon: string;
  label: string;
  mobileClassName?: string;
};

export const mobileNavigationItems: NavigationItem[] = [
  { href: "/", icon: "⌂", label: "Trang chủ" },
  { href: "/danh-muc/dien-tu", icon: "▦", label: "Danh mục" },
  { href: "/kiem-tra", icon: "⌗", label: "Kiểm tra", mobileClassName: "navCheck" },
  { href: "/so-sanh", icon: "▥", label: "So sánh" },
  { href: "/admin/dang-nhap", icon: "♙", label: "Tài khoản" },
];

export function isNavigationActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";

  const section = href.split("/").slice(0, 2).join("/");
  return pathname === section || pathname.startsWith(`${section}/`);
}
