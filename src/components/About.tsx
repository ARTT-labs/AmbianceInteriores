import image from "../assets/aboutUS.png";
import line from "../assets/line.svg";


export function About() {
  return (
    <section id="about" className="px-10 py-20 bg-white grid md:grid-cols-2 gap-10 items-center">
      <img src={image} alt="Equipe Ambiance" className="rounded-lg shadow-lg"/>
      <div>
        <div className="flex items-center gap-4">
          <span className="w-12 h-0.5 bg-black"></span>
          <h2 className="text-3xl md:text-4xl font-bold">Sobre Nós</h2>
        </div>
        <p className="text-gray-600 mb-4">
          Somos especialistas em transformar ideias em espaços que refletem sua identidade. 
          Experiência, criatividade e personalização em cada detalhe.
          Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit pellentesque sollicitudin. Egestas faucibus lacus diam in senectus consectetur. Mattis elit adipiscing quisque tellus scelerisque vehicula ante nunc. Tellus consequat nisl quis nisl justo.
        </p>
        <button className="px-6 py-3 border border-black text-black rounded hover:bg-black hover:text-white transition cursor">
          Saiba Mais
        </button>
      </div>
    </section>
  );
}

