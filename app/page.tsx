import Benefits from "@/components/Benefits";
import DownloadBeta from "@/components/DownloadBeta";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative bg-stone-100 mx-auto">
      <Navbar />
      <Hero />
      <div className="max-w-7xl w-full mx-auto">
        <Benefits />
        <Features />
        <DownloadBeta />
      </div>
    </main>
  );
}
