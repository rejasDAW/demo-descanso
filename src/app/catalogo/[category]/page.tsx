import type { Metadata } from "next";
import CategoryClient from "@/components/catalog/CategoryClient";
import { getCategoryConfig } from "@/data/categories";

type Props = {
    params: Promise<{ category: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { category } = await params;
    const decodedSlug = decodeURIComponent(category);
    const config = getCategoryConfig(decodedSlug);

    return {
        title: config.title, // Template in root layout will add "| Mobiliario Demo"
        description: `Descubre nuestra colección exclusiva de ${config.title}. Diseño premium y calidad artesanal.`,
        openGraph: {
            title: `${config.title} | Colección Exclusiva`,
            description: `Descubre nuestra colección exclusiva de ${config.title}. Diseño premium y calidad artesanal.`,
            images: [
                {
                    url: config.image,
                    width: 1200,
                    height: 630,
                    alt: config.title,
                },
            ],
        },
    };
}

export default async function Page({ params }: Props) {
    const { category } = await params;
    return <CategoryClient slug={category} />;
}
