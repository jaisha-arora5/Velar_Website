import Navbar from "@/components/Navbar";
import Solutions from "@/components/Solutions";
import Footer from "@/components/Footer";

export default function SolutionsPage() {
  return (
    <main className="relative min-h-screen selection:bg-[var(--color-accent-tertiary)] selection:text-white">
      <Navbar />
      <div className="w-full min-h-screen pt-20">
        <Solutions />
      </div>
      <Footer />
    </main>
  );
}
