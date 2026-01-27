import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-neutral-900 dark:bg-black text-white pt-20 pb-10 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="md:col-span-1">
                        <Link href="/" className="font-serif text-2xl tracking-wider text-white mb-6 block">
                            TU MARCA<span className="text-luxury-gold">.</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Mobiliario de diseño y alta ebanistería para hogares que buscan distinción y confort absoluto. Fabricado en Europa desde 1958.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Links Column 1 */}
                    <div>
                        <h4 className="text-sm uppercase tracking-widest text-luxury-gold mb-6 font-medium">Colecciones</h4>
                        <ul className="space-y-4">
                            <li><Link href="/catalogo" className="text-gray-400 hover:text-white text-sm transition-colors">Salón & Sofás</Link></li>
                            <li><Link href="/catalogo" className="text-gray-400 hover:text-white text-sm transition-colors">Butacas Design</Link></li>
                            <li><Link href="/catalogo" className="text-gray-400 hover:text-white text-sm transition-colors">Descanso Premium</Link></li>
                            <li><Link href="/catalogo" className="text-gray-400 hover:text-white text-sm transition-colors">Exterior</Link></li>
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div>
                        <h4 className="text-sm uppercase tracking-widest text-luxury-gold mb-6 font-medium">Empresa</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Sobre Nosotros</Link></li>
                            <li><Link href="/contacto" className="text-gray-400 hover:text-white text-sm transition-colors">Franquicias</Link></li>
                            <li><Link href="/contacto" className="text-gray-400 hover:text-white text-sm transition-colors">Ser Distribuidor</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Prensa</Link></li>
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div>
                        <h4 className="text-sm uppercase tracking-widest text-luxury-gold mb-6 font-medium">Legal</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Aviso Legal</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Política de Privacidad</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Política de Cookies</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Términos de Venta</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-neutral-800 dark:border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center bg-neutral-900 dark:bg-black transition-colors">
                    <p className="text-gray-600 text-xs text-center md:text-left">
                        &copy; 2026 TU MARCA Mobiliario S.L. Todos los derechos reservados.
                    </p>
                    <p className="text-gray-700 text-xs mt-2 md:mt-0 flex items-center gap-1">
                        Hecho con <span className="text-red-900">♥</span> en España
                    </p>
                </div>
            </div>
        </footer>
    );
}
