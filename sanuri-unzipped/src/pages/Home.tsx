import { Navbar, Footer } from '../components/Navigation';
import { Hero, About } from '../components/HeroAbout';
import { Contact } from '../components/ContactCTA';
import { ScrollAnimation } from '../components/ScrollAnimation';

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent text-slate-300 font-sans selection:bg-blue-500/30 selection:text-white relative">
      <ScrollAnimation />
      <div className="relative z-10 bg-[#030712]/70">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
