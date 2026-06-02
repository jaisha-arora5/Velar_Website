import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen selection:bg-[var(--color-accent-tertiary)] selection:text-white">
      <Navbar />
      <div className="w-full min-h-screen pt-20">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
