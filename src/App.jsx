import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Pilot from "./components/Pilot";
import Awards from "./components/Awards";
import Partners from "./components/Partners";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-royal-900 text-royal-700 dark:text-white transition-colors duration-500">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Pilot />
        <Awards />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}
