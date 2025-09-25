import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Process } from "./components/Process";
import { Services } from "./components/Services";
import { Showcase } from "./components/Showcase";
import { TechStack } from "./components/TechStack";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Process />
      <Showcase />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  );
}
