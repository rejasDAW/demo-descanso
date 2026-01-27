"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const COLLECTIONS = [
    {
        title: "Otoño / Invierno",
        description: "Tonos tierra y texturas cálidas para el refugio perfecto.",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
        link: "/catalogo"
    },
    {
        title: "Outdoor Living",
        description: "Resistencia y diseño para disfrutar bajo el sol.",
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop",
        link: "/catalogo"
    }
];

export default function Collections() {
    return (
        <section className="py-20 bg-white dark:bg-gray-900 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="font-serif text-3xl md:text-4xl text-gray-900 dark:text-white mb-12 text-center">Colecciones 2026</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {COLLECTIONS.map((col, idx) => (
                        <div key={idx} className="group relative overflow-hidden h-[500px] bg-gray-100">
                            <img
                                src={col.image}
                                alt={col.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

                            <div className="absolute bottom-0 left-0 p-8 text-white">
                                <h3 className="font-serif text-3xl mb-2">{col.title}</h3>
                                <p className="font-sans text-sm mb-6 opacity-90 max-w-sm">{col.description}</p>
                                <Link href={col.link} className="inline-flex items-center text-sm uppercase tracking-widest border-b border-white pb-1 hover:text-luxury-gold hover:border-luxury-gold transition-colors">
                                    Descubrir <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
