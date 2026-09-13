"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { products } from "@/data/catalog";
import { findCheckProduct } from "@/lib/catalog";
import { MobileBottomNav, SiteHeader } from "@/components/layout/navigation";
import { NoResultState } from "@/components/states/feedback-states";

export function CheckView() {
  const [term, setTerm] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const product = findCheckProduct(products, term);
  const blank = submitted && !term.trim();

  return <><SiteHeader /><main className="checkPage"><p className="eyebrow">KIỂM TRA DỮ LIỆU MẪU</p><h1>Tra cứu model hoặc barcode</h1><p>Đây là công cụ demo. Kết quả cho biết dữ liệu mẫu có mặt trong nền tảng, không phải chứng nhận hàng thật.</p><form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); if (!term.trim()) inputRef.current?.focus(); }}><label htmlFor="check-input">Model, barcode hoặc tên sản phẩm</label><input ref={inputRef} id="check-input" value={term} onChange={(event) => setTerm(event.target.value)} aria-invalid={blank} aria-describedby={blank ? "check-error" : undefined} placeholder="Ví dụ: A3090, SM-S921B" /><button>Kiểm tra</button></form>{blank ? <p id="check-error" className="formError" role="alert">Vui lòng nhập model, barcode hoặc tên sản phẩm trước khi kiểm tra.</p> : submitted && (product ? <article className="checkResult"><span>✓</span><div><p>Đã tìm thấy dữ liệu mẫu</p><Link href={`/san-pham/${product.slug}`}><h2>{product.name}</h2></Link><small>Trạng thái: đã đối chiếu nguồn · Cập nhật {product.updatedAt}</small></div></article> : <NoResultState />)}</main><MobileBottomNav /></>;
}
