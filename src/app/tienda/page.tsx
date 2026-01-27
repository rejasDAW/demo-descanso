"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Clock, MapPin, Phone, Mail } from "lucide-react";

export default function TiendaPage() {
    return (
        <main className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
            <Navbar />

            {/* Header */}
            <div className="bg-white dark:bg-gray-900 pt-32 pb-16 text-center border-b border-gray-100 dark:border-gray-800 transition-colors">
                <h1 className="font-serif text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">Nuestra Exposición</h1>
                <p className="font-sans text-gray-500 dark:text-gray-400 max-w-2xl mx-auto px-4">
                    Descubre 2.000m² dedicados al diseño y confort en el corazón de Ontinyent.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Info Column */}
                    <div className="space-y-12">

                        {/* Story */}
                        <section>
                            <h2 className="font-serif text-2xl mb-6 text-gray-900 dark:text-white">Más que una tienda de muebles</h2>
                            <div className="prose dark:prose-invert text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                                <p className="mb-4">
                                    Fundada en 1985, nuestra tienda familiar ha evolucionado hasta convertirse en el referente de mobiliario premium de la región. No solo vendemos muebles; diseñamos hogares.
                                </p>
                                <p>
                                    Nuestro equipo de interioristas te asesorará gratuitamente par encontrar la pieza perfecta que encaje con tu estilo y espacio. Ven a probar, tocar y sentir la calidad.
                                </p>
                            </div>
                        </section>

                        {/* Hours & Contact */}
                        <section className="bg-white dark:bg-gray-900 p-8 border border-gray-100 dark:border-gray-800 shadow-sm rounded-sm transition-colors">
                            <h3 className="font-serif text-xl mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
                                <Clock className="w-5 h-5 text-luxury-gold" /> Horario Comercial
                            </h3>
                            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300 mb-8 border-b border-gray-100 dark:border-gray-800 pb-8">
                                <div className="flex justify-between">
                                    <span>Lunes - Viernes</span>
                                    <span className="font-medium">10:00 - 13:30 | 17:00 - 20:30</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Sábados</span>
                                    <span className="font-medium">10:00 - 14:00</span>
                                </div>
                            </div>

                            <h3 className="font-serif text-xl mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
                                <MapPin className="w-5 h-5 text-luxury-gold" /> Ubicación
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Polígono Industrial Demo, C/ Ejemplo 123<br />
                                00000 Ciudad (Provincia)
                            </p>

                            <div className="flex gap-4">
                                <button className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 text-xs uppercase tracking-widest hover:bg-luxury-gold dark:hover:bg-gray-200 transition-colors">
                                    Cómo Llegar (Google Maps)
                                </button>
                                <button className="border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white px-6 py-3 text-xs uppercase tracking-widest hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                    Llamar Ahora
                                </button>
                            </div>
                        </section>
                    </div>

                    {/* Map / Image Column */}
                    <div className="h-full min-h-[500px] bg-gray-200 rounded-sm overflow-hidden relative">
                        {/* Use a static map image or real iframe in prod */}
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop')" }}
                        >
                            <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-lg">
                                    <MapPin className="w-8 h-8 text-luxury-gold" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
