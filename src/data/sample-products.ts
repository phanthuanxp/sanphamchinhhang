export type SampleProduct = {
  name: string;
  brand: string;
  category: string;
  model: string;
  price: string;
  offers: number;
  checkedAt: string;
};

export const sampleProducts: SampleProduct[] = [
  { name: "Máy lọc không khí Air Pure 4 Pro", brand: "Xiaomi", category: "Gia dụng", model: "AC-M15-SC", price: "Từ 4.990.000đ", offers: 4, checkedAt: "12/09/2026" },
  { name: "Tai nghe chống ồn QuietComfort", brand: "Bose", category: "Điện tử", model: "QC-2026", price: "Từ 7.290.000đ", offers: 3, checkedAt: "12/09/2026" },
  { name: "Robot hút bụi thông minh S10", brand: "Dreame", category: "Gia dụng", model: "RLS6LADC", price: "Từ 8.490.000đ", offers: 5, checkedAt: "11/09/2026" },
];
