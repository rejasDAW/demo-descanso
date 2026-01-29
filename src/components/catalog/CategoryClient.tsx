"use client";

import Navbar from "@/components/layout/Navbar";
import ProductCard from "@/components/catalog/ProductCard";
import Footer from "@/components/layout/Footer";
import { PRODUCTS } from "@/data/products";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getCategoryConfig } from "@/data/categories";

interface CategoryClientProps {
    slug: string;
}

export default function CategoryClient({ slug }: CategoryClientProps) {
    // Decode slug if coming from URL param
    const decodedSlug = decodeURIComponent(slug);
    const config = getCategoryConfig(decodedSlug);
    const { title: categoryTitle, dbCategory, image: bgImage } = config;

    const filteredProducts = PRODUCTS.filter(p => p.category === dbCategory);

    return (
        <main className="min-h-screen bg-luxury-cream dark:bg-[#050505] transition-colors">
            <Navbar />

            {/* Visual Hero Section */}
            <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                {/* Background Image with Parallax-like feel */}
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000 hover:scale-105"
                    style={{ backgroundImage: `url('${bgImage}')` }}
                />

                {/* Dark Overlay for contrast */}
                <div className="absolute inset-0 bg-black/50 dark:bg-black/60" />

                {/* Content */}
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
                    <Link
                        href="/catalogo"
                        className="inline-flex items-center text-xs uppercase tracking-[0.2em] text-white/80 hover:text-white transition-colors mb-6 border-b border-white/20 pb-1"
                    >
                        <ArrowLeft className="w-3 h-3 mr-2" /> Catalogo Completo
                    </Link>

                    <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 tracking-tight">
                        {categoryTitle}
                    </h1>

                    <p className="font-sans text-gray-200 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                        Explora nuestra selección exclusiva de <span className="text-luxury-gold italic">{categoryTitle.toLowerCase()}</span>, diseñada para elevar cada rincón de tu hogar.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
                        {filteredProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                {...product}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-24">
                        <p className="text-gray-400 mb-6">No hemos encontrado productos en esta sección.</p>
                        <Link href="/catalogo" className="text-luxury-gold border-b border-luxury-gold hover:text-gray-900 hover:border-gray-900 transition-colors">
                            Ver todos los productos
                        </Link>
                    </div>
                )}
            </div>
            <Footer />
        </main>
    );
}
