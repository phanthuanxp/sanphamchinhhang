# sanphamchinhhang.com

Nền tảng giúp người Việt tìm kiếm, kiểm tra, so sánh và chọn nơi mua sản phẩm chính hãng.

## Trạng thái

Sprint 0 — nền móng dự án và giao diện mẫu chạy localhost.

## Chạy dự án

```bash
npm install
npm run dev
```

Mở `http://localhost:3000`.

## Kiểm tra trước khi bàn giao

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

## Tài liệu

- `SANPHAMCHINHHANG_MASTER_IMPLEMENTATION_PLAN.md`: kế hoạch tổng thể.
- `docs/PRD.md`: phạm vi sản phẩm MVP.
- `docs/ARCHITECTURE.md`: kiến trúc kỹ thuật.
- `docs/DATA_GOVERNANCE.md`: quy tắc dữ liệu và xác minh.
- `docs/ROADMAP.md`: Sprint và mốc nghiệm thu.
- `docs/DESIGN_BRIEF.md`: giao diện desktop/mobile đã duyệt và design system.
- `docs/SPRINT_1_CODEX_PROMPT.md`: yêu cầu triển khai Sprint 1 dành cho Codex.
- `AGENTS.md`: quy tắc dành cho Codex.
- `CLAUDE.md`: quy tắc dành cho Claude Code.

## Nguyên tắc

- Codex/ChatGPT xây dựng hệ thống chính.
- Claude Code review độc lập; không tự sửa khi chưa được giao task.
- Không commit secret.
- Không tự động xuất bản nội dung AI.
- Mọi dữ liệu giá, bảo hành và xác minh phải có nguồn và thời điểm cập nhật.
