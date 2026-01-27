import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/ui/Hero";
import ProductGrid from "@/components/catalog/ProductGrid";
import Collections from "@/components/home/Collections";
import Manifesto from "@/components/home/Manifesto";
import Services from "@/components/home/Services";
import ShowroomTeaser from "@/components/home/ShowroomTeaser";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-luxury-cream">
      <Navbar />
      <Hero />
      <Manifesto />
      <Collections />
      <ProductGrid />
      <ShowroomTeaser />
      <Services />
      <section className="py-20 text-center bg-white dark:bg-neutral-900 transition-colors">
        <h3 className="font-serif text-2xl mb-4 text-gray-900 dark:text-white">Solicita el Catálogo Completo</h3>
        <p className="text-gray-500 dark:text-gray-400 font-sans italic mb-8 max-w-md mx-auto">
          Accede a nuestra colección exclusiva para profesionales.
        </p>
        <button className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-3 text-sm uppercase tracking-widest hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors">
          Contactar Agente
        </button>
      </section>
    </main>
  );
}
