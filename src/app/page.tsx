import { sampleProducts } from "@/data/sample-products";

const categories = [
  { name: "Điện tử – công nghệ", count: "120 sản phẩm", mark: "01" },
  { name: "Gia dụng", count: "86 sản phẩm", mark: "02" },
  { name: "Mỹ phẩm", count: "Sắp ra mắt", mark: "03" },
  { name: "Mẹ và bé", count: "Sắp ra mắt", mark: "04" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#" aria-label="Sản Phẩm Chính Hãng - Trang chủ">
          <span className="brand-mark">SP</span>
          <span>SẢN PHẨM <strong>CHÍNH HÃNG</strong></span>
        </a>
        <nav aria-label="Điều hướng chính">
          <a href="#categories">Danh mục</a>
          <a href="#products">Sản phẩm</a>
          <a href="#how-it-works">Cách kiểm tra</a>
          <button className="outline-button" type="button">Dành cho thương hiệu</button>
        </nav>
      </header>

      <section className="hero">
        <div className="eyebrow"><span /> DỮ LIỆU CÓ NGUỒN • GIÁ CÓ THỜI ĐIỂM</div>
        <h1>Tìm đúng sản phẩm.<br /><em>Chọn đúng nơi mua.</em></h1>
        <p>Tra cứu thông tin, so sánh lựa chọn và tìm nơi bán đáng tin cậy trước khi quyết định mua.</p>
        <form className="search-box" role="search">
          <label className="sr-only" htmlFor="product-search">Tìm kiếm sản phẩm</label>
          <input id="product-search" placeholder="Nhập tên sản phẩm, model, SKU hoặc barcode…" />
          <button type="submit">Tìm sản phẩm</button>
        </form>
        <div className="quick-links">
          <span>Tìm nhanh:</span><a href="#products">Máy lọc không khí</a><a href="#products">Robot hút bụi</a><a href="#products">Tai nghe</a>
        </div>
      </section>

      <section className="section" id="categories">
        <div className="section-heading"><div><span className="kicker">KHÁM PHÁ</span><h2>Danh mục sản phẩm</h2></div><a href="#categories">Xem tất cả →</a></div>
        <div className="category-grid">
          {categories.map((category) => (
            <article className="category-card" key={category.name}>
              <span className="category-number">{category.mark}</span><div><h3>{category.name}</h3><p>{category.count}</p></div><span aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section products-section" id="products">
        <div className="section-heading"><div><span className="kicker">ĐÃ ĐỐI CHIẾU NGUỒN</span><h2>Sản phẩm đang được quan tâm</h2></div><a href="#products">Mở danh sách →</a></div>
        <div className="product-grid">
          {sampleProducts.map((product, index) => (
            <article className="product-card" key={product.model}>
              <div className={`product-visual visual-${index + 1}`}><span>{product.category}</span><strong>{product.brand.slice(0, 1)}</strong></div>
              <div className="product-copy">
                <div className="verified"><span>✓</span> Đã đối chiếu nguồn</div>
                <p className="meta">{product.brand} · {product.model}</p><h3>{product.name}</h3>
                <div className="price-row"><strong>{product.price}</strong><span>{product.offers} nơi mua</span></div>
                <p className="updated">Cập nhật {product.checkedAt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="trust" id="how-it-works">
        <div><span className="kicker light">NGUYÊN TẮC MINH BẠCH</span><h2>Không chỉ nói “chính hãng”.<br />Chúng tôi cho bạn biết căn cứ.</h2></div>
        <ol>
          <li><span>01</span><div><strong>Đối chiếu nguồn</strong><p>Ưu tiên dữ liệu từ hãng và nhà phân phối được công bố.</p></div></li>
          <li><span>02</span><div><strong>Ghi rõ thời điểm</strong><p>Giá và thông tin luôn kèm ngày cập nhật.</p></div></li>
          <li><span>03</span><div><strong>Tách bạch xác minh</strong><p>Phân biệt rõ thương hiệu, người bán, giấy tờ và sản phẩm.</p></div></li>
        </ol>
      </section>

      <footer><span>© 2026 sanphamchinhhang.com</span><span>Bản thử nghiệm Sprint 0</span></footer>
    </main>
  );
}
