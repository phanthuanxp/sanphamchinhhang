import { CatalogView } from "@/components/prototype";
export default async function CategoryPage({ params, searchParams }: PageProps<"/danh-muc/[slug]">) { const { slug } = await params; const { q } = await searchParams; return <CatalogView initialCategory={slug} initialQuery={typeof q === "string" ? q : ""}/>; }
