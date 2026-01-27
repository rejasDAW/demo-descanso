export default function Manifesto() {
    return (
        <section className="py-24 bg-luxury-cream dark:bg-black transition-colors text-center">
            <div className="max-w-3xl mx-auto px-4">
                <span className="text-luxury-gold uppercase tracking-[0.3em] text-xs font-bold mb-6 block">
                    Nuestra Filosofía
                </span>
                <h2 className="font-serif text-3xl md:text-5xl text-gray-900 dark:text-white mb-8 leading-tight">
                    "No diseñamos muebles,<br />creamos legados."
                </h2>
                <p className="font-sans text-gray-600 dark:text-gray-400 leading-relaxed text-lg mb-10">
                    En un mundo de producción masiva, apostamos por el tiempo.
                    El tiempo de seleccionar la madera perfecta, el tiempo de curtir la piel,
                    y el tiempo que usted disfrutará de una pieza hecha para durar generaciones.
                </p>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Signature_sample.svg"
                    alt="Firma Fundador"
                    className="h-12 mx-auto opacity-50"
                />
                <p className="text-xs uppercase tracking-widest text-gray-400 mt-2">Fundador & Artesano</p>
            </div>
        </section>
    );
}
