"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Heart } from "lucide-react";
export default function ProductCard({ id, name, category, price, image, delay = 0 }: ProductProps) {
    const { isInWishlist, toggleWishlist } = useWishlist();
    const isLiked = isInWishlist(id);

    return (
        <div
            className="group relative animate-fade-in-up opacity-0 fill-mode-forwards"
            style={{ animationDelay: `${delay}s` }}
        >
            <div className="aspect-[3/4] overflow-hidden bg-gray-100 dark:bg-gray-800 relative rounded-sm">
                <Link href={`/producto/${id}`} className="block w-full h-full relative">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
                </Link>

                {/* Wishlist Toggle Button - Top Left */}
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        toggleWishlist(id);
                    }}
                    className="absolute top-4 left-4 z-10 p-2 text-white hover:scale-110 transition-transform duration-200"
                >
                    <Heart className={`w-6 h-6 drop-shadow-md transition-colors ${isLiked ? 'fill-red-500 stroke-red-500' : 'stroke-white fill-black/20'}`} />
                </button>

                {/* Quick action button that appears on hover */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 hidden md:block">
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
        </div>
    );
}
