<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Quy tắc dự án sanphamchinhhang.com

- Đọc `SANPHAMCHINHHANG_MASTER_IMPLEMENTATION_PLAN.md` và tài liệu liên quan trước khi thay đổi kiến trúc.
- Codex là công cụ xây dựng chính: frontend, backend, database, test và tích hợp.
- Làm theo từng Issue/Sprint; không tự mở rộng ngoài phạm vi được giao.
- Giữ TypeScript strict; ưu tiên Server Components, chỉ dùng Client Components khi cần tương tác.
- Không đưa secret, token, mật khẩu hoặc dữ liệu người dùng thật vào mã nguồn, log hay tài liệu.
- AI chỉ tạo bản nháp. Mọi dữ liệu sản phẩm quan trọng phải có nguồn và được con người duyệt.
- Thay đổi schema phải có migration và ghi chú rollback.
- Trước khi hoàn tất phải chạy lint, typecheck, test liên quan và build.
- Không merge khi còn lỗi Critical/High từ vòng review độc lập.
