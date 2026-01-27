import Link from "next/link";

export default function ShowroomTeaser() {
    return (
        <section className="relative h-[600px] w-full mt-24">
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&w=2070&auto=format&fit=crop')" }}
            >
                <div className="absolute inset-0 bg-black/50" />
            </div>

            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 max-w-4xl mx-auto">
                <span className="text-white uppercase tracking-[0.3em] text-sm font-medium mb-6">
                    Ven a vernos
                </span>
                <h2 className="font-serif text-4xl md:text-6xl text-white mb-8 leading-tight">
                    La calidad se siente,<br />no se explica.
                </h2>
                <p className="font-sans text-gray-200 text-lg mb-10 max-w-2xl leading-relaxed">
                    Le invitamos a visitar nuestro showroom. Toque las telas, pruebe la firmeza de los asientos y déjese asesorar por nuestros interioristas.
                </p>

                <Link
                    href="/tienda"
                    className="bg-white text-gray-900 px-10 py-4 text-sm uppercase tracking-widest hover:bg-luxury-gold hover:text-white transition-all duration-300"
                >
                    Ver Horarios y Ubicación
                </Link>
            </div>
        </section>
    );
}
