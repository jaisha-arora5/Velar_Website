import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Solutions from "@/components/Solutions";
import Industries from "@/components/Industries";
import Vision from "@/components/Vision";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    /* FIXED: Removed the inline style object and mapped the custom CSS variable 
      directly into Tailwind's selection utility using arbitrary values selection-[...]
    */
    <main className="relative min-h-screen text-slate-100 selection:bg-[var(--color-accent-tertiary)] selection:text-white">
      
      {/* GLOBAL FIXED GLASS NAVIGATION CHANNEL */}
      <Navbar />

      {/* 1. HOME VIEWPORT BLOCK */}
      <div id="home" className="w-full min-h-screen snap-start snap-always">
        <Hero />
      </div>

      {/* 2. ABOUT US VIEWPORT BLOCK */}
      <div id="about" className="w-full min-h-screen snap-start snap-always">
        <About />
      </div>

      {/* 3. SOLUTIONS VIEWPORT BLOCK */}
      <div id="solutions" className="w-full min-h-screen snap-start snap-always">
        <Solutions />
      </div>

      {/* 4. INDUSTRIES VIEWPORT BLOCK */}
      <div id="industries" className="w-full min-h-screen snap-start snap-always">
        <Industries />
      </div>

      {/* 5. VISION VIEWPORT BLOCK */}
      <div id="vision" className="w-full min-h-screen snap-start snap-always">
        <Vision />
      </div>

      {/* 6. CONTACT US VIEWPORT BLOCK */}
      <div id="contact" className="w-full min-h-screen snap-start snap-always">
        <Contact />
      </div>

      {/* 7. GLOBAL STRUCTURAL FLAT BLACK FOOTER CONTAINER */}
      <Footer />

    </main>
  );
}