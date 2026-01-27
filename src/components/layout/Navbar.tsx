"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Menu, ShoppingBag, X, ChevronRight } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { PRODUCTS } from "@/data/products";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();

    // Prevent body scroll when menu/search is open
    useEffect(() => {
        if (isMenuOpen || isSearchOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMenuOpen, isSearchOpen]);

    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setIsSearchOpen(false);
                setIsMenuOpen(false);
            }
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    const filteredProducts = searchQuery
        ? PRODUCTS.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
        : [];

    const handleProductClick = (slug: string) => {
        setIsSearchOpen(false);
        setSearchQuery("");
        router.push(`/producto/${slug}`);
    };

    return (
        <>
            <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/95 backdrop-blur-md border-b border-gray-100 dark:border-gray-900 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center z-50">
                            <Link href="/" className="font-serif text-2xl tracking-wider text-gray-900 dark:text-white transition-colors">
                                TU MARCA<span className="text-gray-400 dark:text-gray-600">.</span>
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:ml-12 md:flex md:space-x-10">
                            <Link href="/catalogo/sofas" className="font-sans text-sm font-medium text-gray-900 dark:text-gray-200 hover:text-gray-500 dark:hover:text-white transition-colors uppercase tracking-widest">
                                Sofás
                            </Link>
                            <Link href="/catalogo/sillones" className="font-sans text-sm font-medium text-gray-900 dark:text-gray-200 hover:text-gray-500 dark:hover:text-white transition-colors uppercase tracking-widest">
                                Sillones
                            </Link>
                            <Link href="/catalogo/camas" className="font-sans text-sm font-medium text-gray-900 dark:text-gray-200 hover:text-gray-500 dark:hover:text-white transition-colors uppercase tracking-widest">
                                Camas Articuladas
                            </Link>
                            <Link href="/colecciones" className="font-sans text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors uppercase tracking-widest">
                                Colecciones
                            </Link>
                        </div>

                        {/* Icons */}
                        <div className="flex items-center space-x-4 md:space-x-6 z-50">
                            <ThemeToggle />
                            <button
                                onClick={() => setIsSearchOpen(true)}
                                className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                            >
                                <Search className="h-5 w-5" />
                            </button>
                            <button className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors hidden md:block">
                                <ShoppingBag className="h-5 w-5" />
                            </button>
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors md:hidden"
                            >
                                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-40 bg-white dark:bg-black pt-24 px-6 md:hidden animate-in slide-in-from-top-10 duration-200">
                    <div className="flex flex-col space-y-6">
                        <Link href="/catalogo/sofas" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-4">
                            Sofás
                        </Link>
                        <Link href="/catalogo/sillones" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-4">
                            Sillones
                        </Link>
                        <Link href="/catalogo/camas" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-4">
                            Camas
                        </Link>
                        <Link href="/colecciones" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif text-gray-500 dark:text-gray-400 pb-4">
                            Colecciones
                        </Link>
                        <Link href="/tienda" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif text-luxury-gold pb-4">
                            Nuestras Tiendas
                        </Link>
                    </div>
                </div>
            )}

            {/* Search Overlay - Compact Spotlight Style */}
            {isSearchOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm animate-in fade-in duration-200"
                        onClick={() => setIsSearchOpen(false)}
                    />

                    {/* Modal */}
                    <div className="fixed top-24 left-1/2 -translate-x-1/2 w-full max-w-lg z-[70] px-4 animate-in slide-in-from-top-4 duration-300">
                        <div className="bg-white dark:bg-[#1a1a1a] rounded-xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden ring-1 ring-black/5">
                            {/* Header / Input */}
                            <div className="p-4 flex items-center gap-3 border-b border-gray-100 dark:border-gray-800">
                                <Search className="w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Buscar..."
                                    className="flex-1 bg-transparent text-lg text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-0"
                                    autoFocus
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <button
                                    onClick={() => setIsSearchOpen(false)}
                                    className="p-1 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                                    title="Cerrar (Esc)"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Results */}
                            <div className="max-h-[60vh] overflow-y-auto">
                                {searchQuery && filteredProducts.length === 0 && (
                                    <div className="py-12 text-center text-gray-500 text-sm">
                                        No encontramos productos para &quot;{searchQuery}&quot;
                                    </div>
                                )}

                                {filteredProducts.map(product => (
                                    <div
                                        key={product.id}
                                        onClick={() => handleProductClick(product.id)}
                                        className="flex items-center gap-4 px-4 py-3 hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer border-b border-gray-50 dark:border-gray-800 last:border-0 transition-colors group"
                                    >
                                        <img src={product.image} alt={product.name} className="w-10 h-10 object-cover rounded-md" />
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-sm font-medium text-gray-900 dark:text-white truncate group-hover:text-luxury-gold transition-colors">{product.name}</h4>
                                            <p className="text-xs text-gray-500 truncate">{product.category}</p>
                                        </div>
                                        <ChevronRight className="w-4 h-4 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                ))}

                                {filteredProducts.length > 0 && (
                                    <div className="bg-gray-50 dark:bg-black/20 px-4 py-2 text-[10px] text-gray-400 text-center uppercase tracking-widest font-medium">
                                        {filteredProducts.length} Resultados encontrados
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
