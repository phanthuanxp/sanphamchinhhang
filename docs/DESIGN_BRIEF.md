# Design Brief — giao diện đã duyệt

## Tài liệu tham chiếu bắt buộc

| Thiết bị | Ảnh đã duyệt |
|---|---|
| Mobile | `docs/design/home-mobile-approved.png` |
| Desktop | `docs/design/home-desktop-approved.png` |

Hai ảnh là định hướng hình ảnh và bố cục, không phải đặc tả pixel-perfect. Khi triển khai phải giữ đúng ngôn ngữ thiết kế, đồng thời dùng HTML/CSS/component thật, text chính xác, responsive và accessible.

## Mục tiêu trải nghiệm

- 70% người dùng dự kiến truy cập bằng mobile.
- Mobile-first, thao tác một tay, vùng chạm tối thiểu khoảng 44px.
- Người dùng thấy ngay ô tìm kiếm và quét barcode/model mà không phải cuộn.
- Tạo cảm giác nền tảng dữ liệu đáng tin cậy, không giống sàn giảm giá.
- Luồng chính: Tìm kiếm → Đọc căn cứ → So sánh → Chọn nơi mua.

## Ngôn ngữ thiết kế

- Xanh emerald đậm/xanh navy-green tạo độ tin cậy.
- Nền trắng và xám xanh rất nhạt.
- Xanh lime chỉ dùng tiết chế cho xác minh và hành động quan trọng.
- Viền mảnh, bóng rất nhẹ, bo góc 10–16px.
- Typography sans-serif hiện đại, hiển thị tiếng Việt tốt.
- Bố cục thoáng, hierarchy rõ, tránh quá nhiều pill và gradient.
- Không dùng countdown, giảm giá gây nhiễu, rating giả hoặc cart làm trọng tâm.

## Token khởi điểm

```css
--brand-950: #063c32;
--brand-900: #075143;
--brand-700: #08755d;
--accent-400: #82e56f;
--surface: #ffffff;
--surface-muted: #f3f7f5;
--border: #dce6e1;
--text: #10231d;
--text-muted: #65736e;
```

## Thành phần dùng chung

- `SiteHeader`: logo, menu, tìm kiếm nhanh, bookmark/thông báo.
- `SearchBar`: tìm tên/model/barcode và nút quét mã.
- `CategoryShortcut`: danh mục có icon và vùng chạm lớn.
- `VerificationSummary`: mô tả căn cứ, thời điểm và phạm vi xác minh.
- `ProductCard`: ảnh, trạng thái nguồn, brand/model, giá, số nơi mua, lưu và so sánh.
- `CompareTray`: hiển thị các sản phẩm đã chọn, tối đa 4.
- `MobileBottomNav`: Trang chủ, Danh mục, Kiểm tra, So sánh, Tài khoản.
- `DesktopTrustPanel`: ba tiêu chí nguồn, thời điểm, nơi bán.

## Quy tắc nội dung

- Dùng “Đã đối chiếu nguồn”, không tuyên bố tuyệt đối “đã xác thực chính hãng”.
- Giá phải có tiền tố “Từ” khi có nhiều nơi bán.
- Giá và offer phải có ngày cập nhật.
- Hiển thị rõ nơi bán chính thức, đại lý, sàn hoặc nguồn khác khi có dữ liệu thật.
- Dữ liệu Sprint 1 là giả lập và phải được đánh dấu trong code/data.

## Responsive

### Mobile

- Header gọn; search và scan ở vùng đầu.
- Danh mục 4 ô dễ chạm.
- Product card tối ưu một hoặc hai cột tùy chiều rộng; không nén chữ.
- Bottom navigation cố định, mục “Kiểm tra” là hành động trung tâm.
- Compare tray không che nội dung hoặc bottom navigation.

### Desktop

- Header ngang và hero gọn, không có khoảng trống marketing quá lớn.
- Search là trọng tâm; trust panel nằm cùng vùng nhìn đầu tiên.
- Danh mục hiển thị một hàng khi đủ rộng.
- Product grid 4 cột trên màn hình lớn, giảm cột hợp lý trên tablet.
- Khu vực nguyên tắc tin cậy rõ ràng ở cuối lát cắt trang chủ.

## Accessibility và chất lượng

- Semantic HTML, keyboard navigation và focus visible.
- Contrast đủ rõ; không truyền trạng thái chỉ bằng màu.
- Label/aria-label cho icon button và input.
- Không horizontal scroll ngoài chủ ý.
- Không dùng ảnh chứa text làm nội dung giao diện thật.
- Ảnh sản phẩm có kích thước ổn định để tránh layout shift.
