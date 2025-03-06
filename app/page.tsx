import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Project1 from "@/components/Project1";
import RecentProjects from "@/components/RecentProjects";

export default function Home() {
  return (
    <main className="relative bg-amber-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <Hero />
        <Benefits />
        <Grid />
        <Project1 />
        <RecentProjects />
        <Footer />
      </div>
    </main>
  );
}
