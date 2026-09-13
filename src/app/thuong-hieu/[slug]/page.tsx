import { BrandView } from "@/components/prototype";
export default async function BrandPage({ params }: PageProps<"/thuong-hieu/[slug]">) { const { slug } = await params; return <BrandView slug={slug}/>; }
