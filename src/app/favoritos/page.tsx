"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/catalog/ProductCard";
import { PRODUCTS } from "@/data/products";
import { useWishlist } from "@/context/WishlistContext";
import Link from "next/link";
import { Heart } from "lucide-react";

export default function WishlistPage() {
    const { items } = useWishlist();

    const wishlistProducts = PRODUCTS.filter(product => items.includes(product.id));

    return (
        <main className="min-h-screen bg-luxury-cream dark:bg-[#050505] transition-colors">
            <Navbar />

            <div className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-12 border-b border-gray-100 dark:border-gray-800 mb-12">
                    <h1 className="font-serif text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
                        Tus Favoritos
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400">
                        {wishlistProducts.length} artículos guardados
                    </p>
                </div>

                {wishlistProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 pb-24">
                        {wishlistProducts.map((product, idx) => (
                            <ProductCard
                                key={product.id}
                                {...product}
                                delay={idx * 0.1}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-24">
                        <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400">
                            <Heart className="w-8 h-8" />
                        </div>
                        <h3 className="font-serif text-2xl text-gray-900 dark:text-white mb-4">
                            Tu lista de deseos está vacía
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md mx-auto">
                            Guarda los productos que más te gusten para consultarlos más tarde o visitarnos en tienda.
                        </p>
                        <Link href="/catalogo" className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 uppercase tracking-widest text-sm hover:bg-luxury-gold dark:hover:bg-gray-200 transition-colors">
                            Explorar Catálogo
                        </Link>
                    </div>
                )}
            </div>

            <Footer />
        </main>
    );
}
