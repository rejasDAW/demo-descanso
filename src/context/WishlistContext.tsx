"use client";

import React, { createContext, useContext, useState, useEffect } from "react";


interface WishlistContextType {
    items: string[]; // Array of Product IDs
    addToWishlist: (id: string) => void;
    removeFromWishlist: (id: string) => void;
    isInWishlist: (id: string) => boolean;
    toggleWishlist: (id: string) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<string[]>([]);
    const [isInitialized, setIsInitialized] = useState(false);

    // Load from LocalStorage on mount
    useEffect(() => {
        const stored = localStorage.getItem("mobiliario_wishlist");
        if (stored) {
            try {
                setItems(JSON.parse(stored));
            } catch (e) {
                console.error("Failed to parse wishlist", e);
            }
        }
        setIsInitialized(true);
    }, []);

    // Save to LocalStorage on change
    useEffect(() => {
        if (isInitialized) {
            localStorage.setItem("mobiliario_wishlist", JSON.stringify(items));
        }
    }, [items, isInitialized]);

    const addToWishlist = (id: string) => {
        if (!items.includes(id)) {
            setItems((prev) => [...prev, id]);
        }
    };

    const removeFromWishlist = (id: string) => {
        setItems((prev) => prev.filter((item) => item !== id));
    };

    const toggleWishlist = (id: string) => {
        if (items.includes(id)) {
            removeFromWishlist(id);
        } else {
            addToWishlist(id);
        }
    };

    const isInWishlist = (id: string) => items.includes(id);

    return (
        <WishlistContext.Provider
            value={{ items, addToWishlist, removeFromWishlist, isInWishlist, toggleWishlist }}
        >
            {children}
        </WishlistContext.Provider>
    );
}

export function useWishlist() {
    const context = useContext(WishlistContext);
    if (context === undefined) {
        throw new Error("useWishlist must be used within a WishlistProvider");
    }
    return context;
}
