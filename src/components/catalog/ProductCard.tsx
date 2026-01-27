"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface ProductProps {
    id: string;
    name: string;
    category: string;
    price: string;
    image: string;
    delay?: number;
}

export default function ProductCard({ id, name, category, price, image, delay = 0 }: ProductProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: delay }}
            className="group relative"
        >
            <div className="aspect-[3/4] overflow-hidden bg-gray-100 dark:bg-gray-800 relative">
                <Link href={`/producto/${id}`}>
                    {/* Use standard img tag for demo simplicity or Next/Image in prod */}
                    <div
                        className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url('${image}')` }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </Link>

                {/* Quick action button that appears on hover */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    <Link href={`/producto/${id}`} className="bg-white dark:bg-gray-900 dark:text-white p-3 rounded-full shadow-lg hover:bg-luxury-gold hover:text-white dark:hover:bg-luxury-gold transition-colors block">
                        <ArrowUpRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>

            <div className="mt-4 flex justify-between items-end">
                <div>
                    <p className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-widest mb-1">{category}</p>
                    <h3 className="text-lg font-serif text-gray-900 dark:text-white group-hover:text-luxury-gold transition-colors">
                        <Link href={`/producto/${id}`}>{name}</Link>
                    </h3>
                </div>
                <p className="font-sans text-sm font-medium text-gray-900 dark:text-gray-200">{price}</p>
            </div>
        </motion.div>
    );
}
