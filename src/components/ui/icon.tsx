import type { ReactNode } from "react";

export type IconName = "search" | "scan" | "bookmark" | "notification" | "home" | "categories" | "compare" | "account" | "shield" | "clock" | "store" | "arrow";
const glyphs: Record<IconName, ReactNode> = { search:"⌕", scan:"⌗", bookmark:"♡", notification:"♧", home:"⌂", categories:"▦", compare:"▥", account:"♙", shield:"✓", clock:"◷", store:"▤", arrow:"›" };
export function Icon({ name, decorative = true }: { name: IconName; decorative?: boolean }) { return <span aria-hidden={decorative ? true : undefined} className={`icon icon-${name}`}>{glyphs[name]}</span>; }
