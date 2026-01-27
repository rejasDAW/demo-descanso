import ProductCard from "./ProductCard";
import { PRODUCTS } from "@/data/products";

export default function ProductGrid() {
    const featuredProducts = PRODUCTS.slice(0, 4); // Show only first 4 on home

    return (
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950 transition-colors">
            <div className="flex justify-between items-end mb-12">
                <h2 className="font-serif text-3xl md:text-4xl text-gray-900 dark:text-white">Colección Destacada</h2>
                <a href="/catalogo" className="hidden md:block text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 hover:text-luxury-gold dark:hover:text-luxury-gold transition-colors pb-1 border-b border-transparent hover:border-luxury-gold">
                    Ver todos los modelos
                </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
                {featuredProducts.map((product, index) => (
                    <ProductCard
                        key={product.id}
                        {...product}
                        delay={index * 0.1}
                    />
                ))}
            </div>

            <div className="mt-12 text-center md:hidden">
                <a href="/catalogo" className="text-sm uppercase tracking-widest text-gray-900 dark:text-white border-b border-gray-900 dark:border-white pb-1">
                    Ver todos los modelos
                </a>
            </div>
        </section>
    );
}
