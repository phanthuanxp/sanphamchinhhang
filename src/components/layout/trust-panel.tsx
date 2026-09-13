export function VerificationSummary() {
  return <section className="verificationSummary"><i aria-hidden="true">✓</i><div><strong>Đã đối chiếu nguồn</strong><p>Sản phẩm trong nền tảng được kiểm tra, đối chiếu thông tin từ nhiều nguồn đáng tin cậy.</p><small>Cập nhật 12/09/2026</small></div><span aria-hidden="true">›</span></section>;
}

export function DesktopTrustPanel({ full = false }: { full?: boolean }) {
  return <aside className={full ? "trustPanel full" : "trustPanel"}>{full ? <><h2>3 nguyên tắc tạo nên sự tin cậy tại SẢN PHẨM CHÍNH HÃNG</h2><div className="trustColumns"><TrustItem icon="✓" title="Đối chiếu nguồn" text="Tổng hợp và so sánh thông tin từ nhà sản xuất, nhà phân phối và nguồn đáng tin cậy." /><TrustItem icon="◷" title="Cập nhật theo thời gian thực" text="Giá và thông tin nơi bán được ghi rõ thời điểm." /><TrustItem icon="▤" title="Mở rộng phạm vi xác minh" text="Phân biệt rõ phạm vi dữ liệu được đối chiếu." /></div></> : <><h2>An tâm hơn<br />với dữ liệu đáng tin cậy</h2><TrustItem icon="✓" title="Đã đối chiếu nguồn" text="Tổng hợp từ nhà sản xuất, nhà phân phối và nguồn đáng tin cậy" /><TrustItem icon="◷" title="Giá có thời điểm" text="Hiển thị thời gian cập nhật" /><TrustItem icon="▤" title="Nơi bán được phân loại" text="Gợi ý nơi bán uy tín, rõ thông tin" /></>}</aside>;
}

function TrustItem({ icon, title, text }: { icon: string; title: string; text: string }) {
  return <div className="trustItem"><i>{icon}</i><span><strong>{title}</strong><small>{text}</small></span></div>;
}
