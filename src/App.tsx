import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { Team } from "./components/Team";
import { Feedbacks } from "./components/Feedbacks";
import { Contact } from "./components/Contact";
//import { Footer } from "./components/Footer";

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
