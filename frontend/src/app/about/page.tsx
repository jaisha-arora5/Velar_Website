import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen selection:bg-[var(--color-accent-tertiary)] selection:text-white">
      <Navbar />
      <div className="w-full min-h-screen pt-20">
        <About />
      </div>
      <Footer />
    </main>
  );
}
