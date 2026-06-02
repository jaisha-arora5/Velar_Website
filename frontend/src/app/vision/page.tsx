import Navbar from "@/components/Navbar";
import Vision from "@/components/Vision";
import Footer from "@/components/Footer";

export default function VisionPage() {
  return (
    <main className="relative min-h-screen selection:bg-[var(--color-accent-tertiary)] selection:text-white">
      <Navbar />
      <div className="w-full min-h-screen pt-20">
        <Vision />
      </div>
      <Footer />
    </main>
  );
}
