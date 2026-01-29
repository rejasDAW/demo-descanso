export interface Product {
    id: string;
    name: string;
    category: "Sofás" | "Sillones" | "Descanso" | "Exterior";
    price: string;
    description: string;
    features: string[];
    image: string;
    images?: string[]; // Gallery support
    colors?: { name: string; hex: string; image?: string }[];
    isNew?: boolean;
}

export const PRODUCTS: Product[] = [
    {
        id: "sofa-hamilton-3p",
        name: "Sofá Hamilton 3P",
        category: "Sofás",
        price: "Desde 1.250€",
        description: "El modelo Hamilton redefine la elegancia contemporánea. Estructura de madera maciza de pino flandes reforzada. Suspensión mediante cinchas elásticas de alta resistencia.",
        features: ["Tapizado antimanchas", "Espuma HR 35kg", "Proyecto Modular", "Garantía 10 años"],
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200",
        images: [
            "https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&w=800",
            "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?auto=format&fit=crop&w=800",
            "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800"
        ],
        isNew: true,
        colors: [
            { name: "Verde Bosque", hex: "#2F4F4F" },
            { name: "Gris Perla", hex: "#D3D3D3" },
            { name: "Arena", hex: "#F4A460" }
        ]
    },
    {
        id: "sillon-velvet-gold",
        name: "Sillón Velvet Gold",
        category: "Sillones",
        price: "Desde 590€",
        description: "Butaca de diseño con inspiración mid-century. Patas cónicas en acabado dorado mate y tapizado en terciopelo de alta gama.",
        features: ["Terciopelo Premium", "Estructura metálica", "Diseño ergonómico"],
        image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200",
        images: [
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800",
            "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=800"
        ],
        colors: [
            { name: "Azul Real", hex: "#4169E1" },
            { name: "Mostaza", hex: "#DAA520" },
            { name: "Rosa Empolvado", hex: "#BC8F8F" }
        ]
    },
    {
        id: "cama-ergo-luxe",
        name: "Cama Articulada Ergo",
        category: "Descanso",
        price: "Consultar",
        description: "Sistema de descanso inteligente con motorización alemana silenciosa. Múltiples planos de articulación para un confort absoluto.",
        features: ["Motor Okin", "Mando inalámbrico", "Refuerzo lumbar"],
        image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1200",
        images: [
            "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=800",
            "https://images.unsplash.com/photo-1505691938895-1758d7bab58d?auto=format&fit=crop&w=800"
        ]
    },
    {
        id: "sofa-modular-cloud",
        name: "Modular Cloud White",
        category: "Sofás",
        price: "Desde 2.100€",
        description: "El sofá más cómodo del mundo. Diseño bajo y profundo pensado para el 'lounging'. Módulos configurables para cualquier espacio.",
        features: ["Pluma de oca", "Tejido lino natural", "Fundas desenfundables"],
        image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200",
        images: [
            "https://images.unsplash.com/photo-1512212621149-107ffe572d2f?auto=format&fit=crop&w=800",
            "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=800"
        ],
        isNew: true,
        colors: [
            { name: "Blanco Lino", hex: "#FAF0E6" },
            { name: "Gris Piedra", hex: "#708090" }
        ]
    },
    {
        id: "butaca-nordic-grey",
        name: "Butaca Nordic Grey",
        category: "Sillones",
        price: "Desde 450€",
        description: "Minimalismo escandinavo en estado puro. Estructura de roble macizo y tejido de lana gris.",
        features: ["Roble macizo", "Lana virgen", "Hecho a mano"],
        image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1200",
        images: [
            "https://images.unsplash.com/photo-1519961655809-34fa156820ff?auto=format&fit=crop&w=800"
        ],
        colors: [
            { name: "Gris Claro", hex: "#DCDCDC" },
            { name: "Carbón", hex: "#36454F" }
        ]
    },
    {
        id: "sofa-chester-leather",
        name: "Chesterfield Royal",
        category: "Sofás",
        price: "Desde 2.800€",
        description: "El clásico atemporal. Capitoné hecho a mano por maestros artesanos con piel italiana de grano completo.",
        features: ["Piel Italiana", "Capitoné Artesanal", "Estructura Haya"],
        image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200",
        images: [
            "https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&w=800"
        ],
        colors: [
            { name: "Cognac", hex: "#8B4513" },
            { name: "Negro", hex: "#000000" },
            { name: "Oxblood", hex: "#800020" }
        ]
    },
    {
        id: "sofa-exterior-zen",
        name: "Set Exterior Zen",
        category: "Exterior",
        price: "Desde 1.890€",
        description: "Convierte tu terraza en un oasis. Madera de teca grado A y cojines hidrófugos resistentes al sol y la lluvia.",
        features: ["Teca Grado A", "Tejido Sunbrella", "Secado rápido"],
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200",
        images: [
            "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=800"
        ],
        isNew: true
    },
    {
        id: "cama-canape-madera",
        name: "Canapé Abatible Wood",
        category: "Descanso",
        price: "Desde 890€",
        description: "Maximiza el almacenamiento sin renunciar al estilo. Acabado en madera natural con sistema de apertura hidráulica sin esfuerzo.",
        features: ["Gran capacidad", "Hidráulicos premium", "Fondo reforzado"],
        image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200",
        images: [
            "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=800"
        ],
        colors: [
            { name: "Roble Natural", hex: "#DEB887" },
            { name: "Nogal", hex: "#8B4513" },
            { name: "Blanco Mate", hex: "#F5F5F5" }
        ]
    }
];
