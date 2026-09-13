import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sản Phẩm Chính Hãng — Tìm, kiểm tra và so sánh",
  description: "Tra cứu thông tin, so sánh và chọn nơi mua sản phẩm chính hãng tại Việt Nam.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
