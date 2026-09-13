export function EmptyState({ title = "Chưa có dữ liệu mẫu", detail = "Khu vực này sẽ được bổ sung khi dữ liệu được duyệt." }: { title?: string; detail?: string }) {
  return <div className="emptyState"><span>◌</span><h2>{title}</h2><p>{detail}</p></div>;
}

export function NoResultState() {
  return <EmptyState title="Không tìm thấy sản phẩm phù hợp" detail="Hãy thử tên thương hiệu, model khác hoặc bớt điều kiện lọc." />;
}

export function LoadingSkeleton() {
  return <div className="skeleton" aria-label="Đang tải nội dung"><i /><i /><i /></div>;
}
