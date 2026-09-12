# Prompt triển khai Sprint 1 dành cho Codex

Sao chép toàn bộ phần dưới đây vào Codex khi bắt đầu Sprint 1.

---

Đọc đầy đủ các file sau trước khi sửa code:

- `AGENTS.md`
- `README.md`
- `SANPHAMCHINHHANG_MASTER_IMPLEMENTATION_PLAN.md`
- `docs/PRD.md`
- `docs/ARCHITECTURE.md`
- `docs/DATA_GOVERNANCE.md`
- `docs/DESIGN_BRIEF.md`
- `docs/ROADMAP.md`

Hai ảnh tham chiếu giao diện đã được chủ dự án duyệt:

- `docs/design/home-mobile-approved.png`
- `docs/design/home-desktop-approved.png`

## Mục tiêu

Triển khai Sprint 1 thành prototype frontend có thể bấm thử, mobile-first, đồng bộ desktop/mobile theo ảnh tham chiếu. 70% người dùng dự kiến truy cập bằng mobile nên chất lượng mobile là ưu tiên cao nhất.

## Phạm vi bắt buộc

1. Hoàn thiện trang chủ.
2. Trang danh mục và bộ lọc mẫu.
3. Trang thương hiệu.
4. Trang chi tiết sản phẩm.
5. Trang so sánh tối đa 4 sản phẩm.
6. Trang kiểm tra bằng model/barcode ở mức prototype.
7. Admin skeleton gồm đăng nhập mẫu, dashboard, sản phẩm, danh mục, thương hiệu, seller/offer và hàng chờ duyệt.
8. Responsive hoàn chỉnh trên mobile, tablet và desktop.

## Giới hạn Sprint 1

- Chỉ dùng dữ liệu mẫu typed trong code.
- Chưa kết nối PostgreSQL hoặc Prisma.
- Chưa làm authentication thật.
- Chưa tích hợp AI, affiliate network, thanh toán hoặc scraper.
- Không thay đổi kiến trúc tổng thể.
- Không tự ý cài thư viện lớn nếu CSS/React hiện tại đáp ứng được.
- Không merge trực tiếp vào `main`.

## Yêu cầu triển khai

- Tạo branch `feat/sprint-1-prototype`.
- Lập kế hoạch route/component/file trước khi sửa.
- Xây design tokens và component dùng chung trước các trang chi tiết.
- Không nhúng ảnh mockup vào giao diện; dựng lại bằng component thật.
- Dùng copy tiếng Việt chính xác, không lấy chữ lỗi từ ảnh AI.
- Giao diện phải có bản sắc trust-tech, không giống template Next.js hoặc sàn giảm giá.
- Search/scan hiện ngay vùng đầu trên mobile.
- Vùng chạm mobile khoảng 44px trở lên.
- Có trạng thái empty, no-result và filter no-result.
- Chọn so sánh tối đa 4; có cảnh báo khi vượt giới hạn.
- Badge ghi đúng “Đã đối chiếu nguồn” hoặc mức xác minh cụ thể.
- Giá và thông tin mẫu có thời điểm cập nhật.
- Semantic HTML, keyboard focus, aria-label và contrast phù hợp.

## Route đề xuất

- `/`
- `/danh-muc/[slug]`
- `/thuong-hieu/[slug]`
- `/san-pham/[slug]`
- `/so-sanh`
- `/kiem-tra`
- `/admin/dang-nhap`
- `/admin`
- `/admin/san-pham`
- `/admin/danh-muc`
- `/admin/thuong-hieu`
- `/admin/noi-mua`
- `/admin/kiem-duyet`

## Trình tự thực hiện

1. Kiểm tra baseline và chạy test hiện tại.
2. Tạo branch.
3. Tạo design tokens, typography, icon strategy và layout primitives.
4. Tạo dữ liệu mẫu và component dùng chung.
5. Hoàn thiện trang chủ mobile trước.
6. Mở rộng trang chủ desktop.
7. Xây các route public còn lại.
8. Xây admin skeleton.
9. Kiểm tra responsive và accessibility.
10. Chạy `npm run lint`, `npm run typecheck`, `npm run test`, `npm run build`.
11. Chụp/ghi nhận kết quả mobile và desktop nếu môi trường hỗ trợ.
12. Commit thay đổi nhưng chưa merge `main`.

## Điều kiện hoàn thành

- Tất cả route trong phạm vi truy cập được và điều hướng hợp lý.
- Mobile không tràn ngang, chữ không chồng, control dễ chạm.
- Desktop sử dụng không gian rộng hiệu quả.
- Search/filter/compare prototype hoạt động với dữ liệu mẫu.
- Bổ sung test cho logic so sánh/lọc quan trọng.
- Lint, typecheck, test và build đều đạt.
- Không có secret hoặc dữ liệu thật.

## Báo cáo cuối Sprint

Báo cáo route, file chính, kết quả mobile/desktop, kết quả kiểm tra, điểm khác ảnh tham chiếu, phần chưa hoàn tất, commit SHA và nội dung đề xuất để Claude Code review độc lập.

---
