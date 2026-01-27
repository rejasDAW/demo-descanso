"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <div className="relative h-screen w-full overflow-hidden bg-gray-900">
            {/* Background Image Placeholder - In real app use a high-res image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 scale-105"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop')" }}
            >
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-luxury-gold uppercase tracking-[0.3em] text-sm md:text-base mb-4 font-medium"
                >
                    Alta Ebanistería &middot; Confort Absoluto
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight"
                >
                    Redefiniendo el<br />
                    <span className="italic font-light">Descanso</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Link
                        href="/catalogo"
                        className="group relative px-8 py-4 bg-white text-gray-900 font-sans text-sm tracking-widest uppercase transition-all hover:bg-luxury-gold hover:text-white"
                    >
                        Ver Catálogo
                        <span className="absolute inset-0 border border-white transform translate-x-1 translate-y-1 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform" />
                    </Link>

                    <Link
                        href="/contacto"
                        className="group flex items-center gap-2 px-8 py-4 border border-white text-white font-sans text-sm tracking-widest uppercase hover:bg-white hover:text-gray-900 transition-colors"
                    >
                        Contactar Distribuidor
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-white/60 text-[10px] uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-white/20 overflow-hidden">
                    <div className="w-full h-1/2 bg-white animate-scroll-down" />
                </div>
            </motion.div>
        </div>
    );
}
