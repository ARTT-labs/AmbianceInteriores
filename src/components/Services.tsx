import icon from "../assets/InteriordesignIcon.svg";
import icon2 from "../assets/LightingdesignIcon.svg";
import icon3 from "../assets/OutdoordesignIcon.svg";

const services = [
  { title: "Consultoria de Interiores", desc: "Diagnóstico e planejamento de espaços.", img: icon },
  { title: "Projetos 3D e Moodboards", desc: "Visualização realista antes da execução.", img: icon2 },
  { title: "Reformas e Decoração Completa", desc: "Do planejamento à entrega.", img: icon3 },
 ];

export function Services() {
  return (
    <section id="services" className="px-10 py-20 bg-gray-50 ">
      <div className="flex items-center gap-4 pb-10">
          <span className="w-12 h-0.5 bg-black"></span>
          <h2 className="text-3xl md:text-4xl font-bold">Nossos Serviços</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s, i) => (
          <div key={i} className="p-6 bg-white rounded shadow hover:shadow-lg transition">
            <img src={s.img} />
            <h3 className="font-semibold text-xl mb-2">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
