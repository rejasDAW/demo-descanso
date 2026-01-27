import { Truck, Ruler, BadgeEuro, Armchair } from "lucide-react";

const SERVICES = [
    {
        icon: Armchair,
        title: "Exposición Real",
        description: "Más de 2.000m² de exposición para que pruebes cada sofá antes de decidir."
    },
    {
        icon: Ruler,
        title: "Proyectos 3D",
        description: "Tráenos las medidas de tu salón. Diseñamos tu espacio gratis al momento."
    },
    {
        icon: Truck,
        title: "Montaje Propio",
        description: "Envío y montaje gratuito en toda la provincia por nuestro equipo experto."
    },
    {
        icon: BadgeEuro,
        title: "Financiación Local",
        description: "Paga cómodamente hasta en 36 meses sin intereses gracias a acuerdos locales."
    }
];

export default function Services() {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-950 border-t border-gray-100 dark:border-gray-900 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {SERVICES.map((service, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center group">
                            <div className="w-16 h-16 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                <service.icon className="w-8 h-8 text-luxury-gold" />
                            </div>
                            <h3 className="font-serif text-lg mb-3 text-gray-900 dark:text-white">{service.title}</h3>
                            <p className="font-sans text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
