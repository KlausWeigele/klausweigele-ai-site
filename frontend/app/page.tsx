import { Contact } from "./components/Contact";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Process } from "./components/Process";
import { Services } from "./components/Services";
import { Showcase } from "./components/Showcase";
import { TechStack } from "./components/TechStack";
import { ValueGrid } from "./components/ValueGrid";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ValueGrid />
      <Services />
      <Showcase />
      <Process />
      <TechStack />
      <CTASection />
      <Contact />
      <Footer />
    </main>
  );
}
