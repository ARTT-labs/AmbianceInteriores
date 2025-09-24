import { Header } from "./components/Header"; // se já existir
import { Hero } from "./components/Hero"; // se já existir
import { About } from "./components/About"; // se já existir
import { Services } from "./components/Services"; // se já existir
import { Portfolio } from "./components/Portfolio";
import { Team } from "./components/Team";
import { Feedbacks } from "./components/Feedbacks";
import { Contact } from "./components/Contact";
//import { Footer } from "./components/Footer"; // se já existir

export default function App() {
  return (
    <>
      <main>
        <Header />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Team />
        <Feedbacks />
        <Contact />
      </main>
    </>
  );
}
