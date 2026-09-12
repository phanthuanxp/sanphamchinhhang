import { describe, expect, it } from "vitest";

import { slugifyVietnamese } from "./slugify";

describe("slugifyVietnamese", () => {
  it("chuẩn hóa tiếng Việt thành slug ổn định", () => {
    expect(slugifyVietnamese("Sản phẩm Chính Hãng Đà Nẵng")).toBe(
      "san-pham-chinh-hang-da-nang",
    );
  });

  it("loại bỏ ký tự thừa ở đầu và cuối", () => {
    expect(slugifyVietnamese("  Máy lọc không khí!!! ")).toBe(
      "may-loc-khong-khi",
    );
  });
});
