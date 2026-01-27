"use client";

import * as React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, Check, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";

interface ProductDetailProps {
    slug: string;
}

export default function ProductDetail({ slug }: ProductDetailProps) {
    // Find product in shared data or fallback to first one if not found
    const product = PRODUCTS.find(p => p.id === slug) || PRODUCTS[0];

    // Configurator State
    const [selectedColor, setSelectedColor] = React.useState(product.colors ? product.colors[0] : null);

    // Update selected color if product changes
    React.useEffect(() => {
        if (product.colors) setSelectedColor(product.colors[0]);
    }, [product]);

    return (
        <main className="min-h-screen bg-white dark:bg-[#050505] transition-colors duration-300">
            <Navbar />

            <div className="pt-24 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/" className="inline-flex items-center text-gray-500 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors text-sm uppercase tracking-widest">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Volver al Catálogo
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Image Gallery Section */}
                    <div className="space-y-4">
                        <div className="aspect-[4/5] bg-gray-100 overflow-hidden rounded-sm group relative">
                            {/* In a real app, this image would change based on selectedColor.image */}
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Wishlist Button Placeholder */}
                            <button className="absolute top-4 right-4 p-3 bg-white/80 dark:bg-black/50 backdrop-blur-sm rounded-full text-gray-900 dark:text-white hover:text-red-500 dark:hover:text-red-400 transition-colors">
                                <span className="sr-only">Añadir a favoritos</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </button>
                        </div>
                        {product.images && product.images.length > 0 && (
                            <div className="grid grid-cols-2 gap-4">
                                {product.images.slice(0, 2).map((img: string, idx: number) => (
                                    <div key={idx} className="aspect-square bg-gray-100 overflow-hidden rounded-sm relative group">
                                        <img
                                            src={img}
                                            alt={`${product.name} detail ${idx + 1}`}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Product Info Section */}
                    <div className="lg:sticky lg:top-32 h-fit">
                        <span className="text-luxury-gold uppercase tracking-[0.2em] text-sm font-medium">
                            {product.category}
                        </span>

                        <h1 className="font-serif text-4xl md:text-5xl text-gray-900 dark:text-white mt-4 mb-6">
                            {product.name}
                        </h1>

                        <p className="text-2xl font-sans font-light text-gray-600 dark:text-gray-300 mb-8 border-b border-gray-100 dark:border-gray-800 pb-8">
                            {product.price}
                        </p>

                        {/* Configurator UI */}
                        {product.colors && (
                            <div className="mb-8">
                                <h3 className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4">
                                    Acabado: <span className="text-gray-900 dark:text-white font-medium">{selectedColor?.name}</span>
                                </h3>
                                <div className="flex space-x-4">
                                    {product.colors.map((color) => (
                                        <button
                                            key={color.name}
                                            onClick={() => setSelectedColor(color)}
                                            className={`w-10 h-10 rounded-full border-2 transition-all ${selectedColor?.name === color.name
                                                ? "border-gray-900 dark:border-white scale-110"
                                                : "border-transparent hover:scale-105"
                                                }`}
                                            style={{ backgroundColor: color.hex }}
                                            title={color.name}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="prose prose-lg text-gray-500 dark:text-gray-400 mb-8 font-light leading-relaxed">
                            <p>{product.description}</p>
                        </div>

                        <div className="space-y-3 mb-12">
                            {product.features.map((feature: string, i: number) => (
                                <div key={i} className="flex items-center text-gray-600 dark:text-gray-300">
                                    <Check className="w-4 h-4 mr-3 text-luxury-gold" />
                                    <span className="text-sm uppercase tracking-wide">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="bg-gray-50 dark:bg-neutral-900 p-8 rounded-sm border border-gray-100 dark:border-neutral-800 transition-colors">
                            <h3 className="font-serif text-lg mb-4 text-gray-900 dark:text-white">¿Te interesa este modelo?</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                                Disponemos de este y otros modelos similares en nuestra exposición para entrega inmediata o pedido personalizado.
                            </p>
                            <div className="flex flex-col gap-3">
                                <Link href="/tienda" className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 h-14 flex items-center justify-center gap-3 uppercase tracking-widest text-sm hover:bg-luxury-gold dark:hover:bg-gray-200 transition-colors duration-300">
                                    <MapPin className="w-4 h-4" />
                                    Ver en Tienda
                                </Link>
                                <button className="w-full bg-white dark:bg-transparent border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white h-12 flex items-center justify-center gap-3 uppercase tracking-widest text-xs hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                    <Mail className="w-4 h-4" />
                                    Consultar Precio Exacto
                                </button>
                            </div>
                            <p className="text-xs text-center text-gray-400 mt-4 flex items-center justify-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500"></span> Stock disponible para ver
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
