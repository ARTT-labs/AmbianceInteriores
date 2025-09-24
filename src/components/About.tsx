export function About() {
  return (
    <section id="about" className="px-10 py-20 bg-white grid md:grid-cols-2 gap-10 items-center">
      <img src="/images/about.jpg" alt="Equipe Ambiance" className="rounded-lg shadow-lg"/>
      <div>
        <h2 className="text-4xl font-bold mb-4">Sobre Nós</h2>
        <p className="text-gray-600 mb-4">
          Somos especialistas em transformar ideias em espaços que refletem sua identidade. 
          Experiência, criatividade e personalização em cada detalhe.
        </p>
        <button className="px-6 py-3 border border-black text-black rounded hover:bg-black hover:text-white transition">
          Saiba Mais
        </button>
      </div>
    </section>
  );
}
