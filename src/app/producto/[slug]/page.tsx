import type { Metadata } from "next";
import { PRODUCTS } from "@/data/products";
import ProductDetail from "@/components/catalog/ProductDetail";

type Props = {
    params: Promise<{ slug: string }>;
};

// Next.js 15: params is now a Promise
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    // await params because it's a promise in Next.js 15
    const { slug } = await params;
    const product = PRODUCTS.find((p) => p.id === slug);

    if (!product) {
        return {
            title: "Producto no encontrado | Mobiliario Demo",
        };
    }

    return {
        title: product.name,
        description: product.description,
        openGraph: {
            title: `${product.name} | Mobiliario Demo`,
            description: product.description,
            images: [
                {
                    url: product.image,
                    width: 1200,
                    height: 630,
                    alt: product.name,
                },
            ],
        },
    };
}

export default async function Page({ params }: Props) {
    const { slug } = await params;
    return <ProductDetail slug={slug} />;
}
