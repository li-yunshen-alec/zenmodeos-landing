import Benefits from "@/components/Benefits";
import DownloadBeta from "@/components/DownloadBeta";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative bg-stone-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <Navbar />
      <div className="max-w-7xl w-full">
        <Hero />
        <Benefits />
        <Features />
        <DownloadBeta />
      </div>
    </main>
  );
}
