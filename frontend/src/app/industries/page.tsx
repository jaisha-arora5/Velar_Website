import Navbar from "@/components/Navbar";
import Industries from "@/components/Industries";
import Footer from "@/components/Footer";

export default function IndustriesPage() {
  return (
    <main className="relative min-h-screen selection:bg-[var(--color-accent-tertiary)] selection:text-white">
      <Navbar />
      <div className="w-full min-h-screen pt-20">
        <Industries />
      </div>
      <Footer />
    </main>
  );
}
