"use client";

import Navbar from "@/components/layout/Navbar";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-luxury-cream">
            <Navbar />

            <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">Contactar Distribución</h1>
                    <p className="font-sans text-gray-500 max-w-2xl mx-auto">
                        Estamos a su disposición para resolver dudas sobre colecciones, tarifas profesionales y zonas de exclusividad.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto bg-white p-8 md:p-12 shadow-sm border border-gray-100">
                    {/* Contact Info */}
                    <div className="space-y-8 pr-8 border-r border-gray-100 border-none md:border-solid">
                        <div>
                            <h3 className="font-serif text-xl mb-6">Oficina Central</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <MapPin className="w-5 h-5 text-luxury-gold mt-1" />
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Polígono Industrial Demo<br />
                                        C/ Ejemplo, 123<br />
                                        00000 Ciudad (Provincia)
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Phone className="w-5 h-5 text-luxury-gold" />
                                    <p className="text-gray-600 text-sm">+34 900 00 00 00</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Mail className="w-5 h-5 text-luxury-gold" />
                                    <p className="text-gray-600 text-sm">info@tu-marca.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-gray-100">
                            <h3 className="font-serif text-xl mb-4">Horario Comercial</h3>
                            <p className="text-gray-600 text-sm">Lunes - Viernes: 08:00 - 18:00</p>
                        </div>
                    </div>

                    {/* Form */}
                    <div>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Nombre Comercial / Tienda</label>
                                <input type="text" className="w-full bg-gray-50 border border-gray-200 p-3 text-sm focus:outline-none focus:border-luxury-gold transition-colors" />
                            </div>

                            <div>
                                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email Profesional</label>
                                <input type="email" className="w-full bg-gray-50 border border-gray-200 p-3 text-sm focus:outline-none focus:border-luxury-gold transition-colors" />
                            </div>

                            <div>
                                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Mensaje</label>
                                <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 p-3 text-sm focus:outline-none focus:border-luxury-gold transition-colors"></textarea>
                            </div>

                            <button className="w-full bg-gray-900 text-white py-4 text-sm uppercase tracking-widest hover:bg-luxury-gold transition-colors duration-300">
                                Enviar Solicitud
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
