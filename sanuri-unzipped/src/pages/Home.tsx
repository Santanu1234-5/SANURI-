import { Navbar, Footer } from '../components/Navigation';
import { Hero, About } from '../components/HeroAbout';
import { Services, Projects } from '../components/ServicesProjects';
import { Interactive, Stats } from '../components/InteractiveStats';
import { Testimonials, Blog } from '../components/TestimonialsBlog';
import { CTA, Contact } from '../components/ContactCTA';
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
          <Services />
          <Projects />
          <Interactive />
          <Stats />
          <Testimonials />
          <Blog />
          <CTA />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
