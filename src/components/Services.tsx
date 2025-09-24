const services = [
  { title: "Consultoria de Interiores", desc: "Diagnóstico e planejamento de espaços." },
  { title: "Projetos 3D e Moodboards", desc: "Visualização realista antes da execução." },
  { title: "Reformas e Decoração Completa", desc: "Do planejamento à entrega." },
  { title: "Design Comercial", desc: "Ambientes corporativos que refletem sua marca." },
];

export function Services() {
  return (
    <section id="services" className="px-10 py-20 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-10">Nossos Serviços</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s, i) => (
          <div key={i} className="p-6 bg-white rounded shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-2">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
