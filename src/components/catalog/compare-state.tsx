"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { products, type Product } from "@/data/catalog";
import { toggleComparison } from "@/lib/catalog";
import { Icon } from "@/components/ui/icon";

export function useCompareState() { const [ids,setIds]=useState<string[]>([]); const [error,setError]=useState<string|null>(null); const [ready,setReady]=useState(false); useEffect(()=>{const timer=window.setTimeout(()=>{const saved=window.localStorage.getItem("spch-compare");if(saved)setIds(JSON.parse(saved));setReady(true);},0);return()=>window.clearTimeout(timer);},[]);useEffect(()=>{if(ready)window.localStorage.setItem("spch-compare",JSON.stringify(ids));},[ids,ready]);return {ids,selected:products.filter(product=>ids.includes(product.id)),error,toggle:(product:Product)=>{const result=toggleComparison(ids,product.id);setIds(result.ids);setError(result.error);},remove:(id:string)=>setIds(ids.filter(value=>value!==id)),clear:()=>{setIds([]);setError(null);}}; }
export function CompareButton({ product, selected, onToggle }: { product: Product; selected: boolean; onToggle: (product: Product) => void }) { return <button className={`compareButton ${selected ? "selected" : ""}`} onClick={() => onToggle(product)} aria-pressed={selected}><Icon name="compare"/>{selected ? "Đã chọn" : "So sánh"}</button>; }
export function CompareTray({ selected,onRemove,onClear,error }: { selected:Product[];onRemove:(id:string)=>void;onClear:()=>void;error:string|null }) { if(!selected.length&&!error)return null;return <div className="compareTray" role="status" aria-live="polite">{error&&<p>{error}</p>}<div><strong>So sánh {selected.length}/4</strong>{selected.map(product=><button key={product.id} onClick={()=>onRemove(product.id)}>{product.name} ×</button>)}<button className="clearCompare" onClick={onClear}>Xóa tất cả</button><Link href="/so-sanh">Mở bảng so sánh <Icon name="arrow"/></Link></div></div>; }
