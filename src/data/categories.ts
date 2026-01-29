export const CATEGORY_CONFIG: Record<string, { title: string; dbCategory: string; image: string }> = {
    "sofas": {
        title: "Sofás",
        dbCategory: "Sofás",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop"
    },
    "sillones": {
        title: "Sillones y Butacas",
        dbCategory: "Sillones",
        image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=2070&auto=format&fit=crop"
    },
    "camas": {
        title: "Camas Articuladas",
        dbCategory: "Descanso",
        image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=2070&auto=format&fit=crop"
    },
    "exterior": {
        title: "Mobiliario Exterior",
        dbCategory: "Exterior",
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2070&auto=format&fit=crop"
    }
};

export const getCategoryConfig = (slug: string) => {
    const normalizedSlug = (slug || "default").toLowerCase();
    const config = CATEGORY_CONFIG[normalizedSlug] || {
        title: normalizedSlug.charAt(0).toUpperCase() + normalizedSlug.slice(1),
        dbCategory: normalizedSlug,
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
    };
    return config;
};
