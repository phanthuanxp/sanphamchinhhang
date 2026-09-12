# Kiến trúc v1

## Stack

- Next.js App Router + TypeScript.
- Tailwind CSS.
- PostgreSQL + Prisma (dự kiến Sprint 2).
- Auth.js cho trang quản trị.
- Cloudinary cho ảnh.
- PostgreSQL full-text + trigram cho tìm kiếm MVP.
- GitHub + Vercel cho CI/CD.

## Miền nghiệp vụ

- Catalog: category, brand, product, variant, attribute.
- Commerce discovery: seller, offer, affiliate redirect.
- Trust: source, evidence, verification status, dispute.
- Content: article, review, buying guide.
- Operations: AI job, moderation workflow, audit log.
- Analytics: search event, product view, outbound click.

## Quy tắc

- Monorepo trong MVP.
- Public, admin, API, job và domain logic tách rõ trong source.
- Trang SEO quan trọng được render phía máy chủ.
- Affiliate redirect phải chống open redirect.
- AI output luôn ở trạng thái nháp.
- Giá luôn có seller, nguồn và thời điểm ghi nhận.
