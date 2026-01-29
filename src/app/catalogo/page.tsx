"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import ProductCard from "@/components/catalog/ProductCard";
import Footer from "@/components/layout/Footer";
import { PRODUCTS } from "@/data/products";
{/* Product Grid */ }
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
    {filteredProducts.map((product) => (
        <ProductCard
            key={product.id}
            {...product}
        />
    ))}
</div>

{
    filteredProducts.length === 0 && (
        <div className="text-center py-20 text-gray-400">
            No hay productos en esta categoría actualmente.
        </div>
    )
}
            </div >
    <Footer />
        </main >
    );
}
