"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const COLLECTIONS = [
    {
        id: "otono-invierno",
        title: "Otoño / Invierno 2026",
        description: "Tonos tierra, lanas vírgenes y maderas oscuras. Una colección pensada para convertir tu hogar en el refugio perfecto contra el frío.",
        products: ["sofa-hamilton-3p", "butaca-nordic-grey"],
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
    },
    {
        id: "mediterraneo",
        title: "Vida Mediterránea",
        description: "Inspirada en nuestra costa. Linos blancos, maderas lavadas y luz. La esencia de vivir despacio.",
        products: ["sofa-modular-cloud", "sillon-luxe-1"],
        image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "outdoor",
        title: "Outdoor Living",
        description: "No es solo una terraza, es tu segundo salón. Mobiliario resistente que no renuncia a la elegancia interior.",
        products: ["sofa-exterior-zen"],
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop"
    }
];

export default function CollectionsPage() {
    return (
        <main className="bg-luxury-cream dark:bg-black transition-colors">
            <Navbar />

            {/* Header Overlay */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 flex items-center justify-center opacity-5">
                <h1 className="font-serif text-[15vw] text-gray-900 dark:text-white leading-none">
                    COLECCIONES
                </h1>
            </div>

            <div className="relative z-10">
                {/* Intro Title */}
                <div className="h-[40vh] flex flex-col justify-center items-center text-center px-4 bg-white dark:bg-black pt-20">
                    <h1 className="font-serif text-4xl md:text-6xl text-gray-900 dark:text-white mb-6">Nuestras Colecciones</h1>
                    <p className="font-sans text-gray-500 dark:text-gray-400 text-lg max-w-2xl">
                        Narrativas visuales diseñadas para inspirar.
                    </p>
                </div>

                {/* Full Width Sections */}
                <div className="flex flex-col">
                    {COLLECTIONS.map((col, idx) => {
                        const isEven = idx % 2 === 0;
                        return (
                            <section key={col.id} className="relative h-screen w-full overflow-hidden group">
                                {/* Background Image */}
                                <div className="absolute inset-0">
                                    <img
                                        src={col.image}
                                        alt={col.title}
                                        className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
                                    />
                                    {/* Gradient Overlay based on position */}
                                    <div className={`absolute inset-0 bg-gradient-to-r ${isEven
                                            ? 'from-black/80 via-black/40 to-transparent'
                                            : 'from-transparent via-black/40 to-black/80'
                                        }`} />
                                </div>

                                {/* Content Container - Alternating Left/Right */}
                                <div className={`relative h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center ${isEven ? 'items-start text-left' : 'items-end text-right'
                                    }`}>
                                    <div className="max-w-xl text-white">
                                        <span className="inline-block border-t border-luxury-gold pt-4 mb-6 uppercase tracking-[0.3em] text-xs font-medium text-luxury-gold">
                                            Temporada 2026
                                        </span>
                                        <h2 className="font-serif text-5xl md:text-7xl mb-8 leading-tight">
                                            {col.title}
                                        </h2>
                                        <p className="font-sans text-lg md:text-xl mb-10 text-gray-200 leading-relaxed font-light">
                                            {col.description}
                                        </p>
                                        <Link
                                            href={`/catalogo?coleccion=${col.id}`}
                                            className="inline-flex items-center gap-3 text-white border-b border-white pb-2 hover:text-luxury-gold hover:border-luxury-gold transition-colors uppercase tracking-widest text-sm"
                                        >
                                            Explorar Colección <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </section>
                        );
                    })}
                </div>
            </div>

            {/* Footer attached to the last section */}
            <div className="relative z-10">
                <Footer />
            </div>
        </main>
    );
}
