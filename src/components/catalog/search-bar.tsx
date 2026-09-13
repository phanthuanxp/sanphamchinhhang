"use client";

import { useState } from "react";
import { BarcodeScanButton } from "@/components/layout/navigation";

export function SearchBar({ initialQuery = "", compact = false }: { initialQuery?: string; compact?: boolean }) {
  const [query, setQuery] = useState(initialQuery);
  return (
    <form className={`searchBar ${compact ? "compact" : ""}`} action="/danh-muc/dien-tu">
      <label className="sr-only" htmlFor="catalog-search">Tìm sản phẩm</label>
      <span aria-hidden="true">⌕</span>
      <input id="catalog-search" name="q" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Tìm sản phẩm, model hoặc barcode" />
      <BarcodeScanButton />
      {!compact && <button type="submit">Tìm kiếm</button>}
    </form>
  );
}
