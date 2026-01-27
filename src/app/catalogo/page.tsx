"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import ProductCard from "@/components/catalog/ProductCard";
import Footer from "@/components/layout/Footer";
import { PRODUCTS } from "@/data/products";
import { AnimatePresence } from "framer-motion";

const CATEGORIES = ["Todos", "Sofás", "Sillones", "Descanso", "Exterior"];

export default function CatalogPage() {
    const [activeCategory, setActiveCategory] = useState("Todos");

    const filteredProducts = activeCategory === "Todos"
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === activeCategory);

    return (
        <main className="min-h-screen bg-luxury-cream">
            <Navbar />

            {/* Catalog Header */}
            <div className="pt-32 pb-12 text-center bg-white border-b border-gray-100">
                <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">Catálogo Completo</h1>
                <p className="font-sans text-gray-500 max-w-2xl mx-auto px-4">
                    Explore nuestra colección de piezas diseñadas para perdurar.
                </p>
            </div>

            {/* Filters */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full text-sm uppercase tracking-widest transition-all duration-300 ${activeCategory === cat
                                    ? "bg-gray-900 text-white shadow-lg"
                                    : "bg-white text-gray-500 hover:bg-gray-100"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Product Grid with AnimatePresence */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                {...product}
                            />
                        ))}
                    </AnimatePresence>
                </div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-20 text-gray-400">
                        No hay productos en esta categoría actualmente.
                    </div>
                )}
            </div>
            <Footer />
        </main>
    );
}
