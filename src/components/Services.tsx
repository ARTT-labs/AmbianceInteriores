import { useState } from "react";
import { Modal } from "antd";

import interiorsIcon from "../assets/InteriordesignIcon.svg";
import lightIcon from "../assets/LightingdesignIcon.svg";
import outdoorIcon from "../assets/OutdoordesignIcon.svg";

const services = [
  {
    title: "Consultoria de Interiores",
    desc: "Diagnóstico e planejamento de espaços personalizados.",
    img: interiorsIcon,
    details:
      "Nossa consultoria de interiores é o ponto de partida para transformar o seu espaço. Através de um diagnóstico completo, identificamos as melhores soluções para otimizar a funcionalidade e o fluxo do ambiente, sempre alinhando com suas necessidades e estilo pessoal.",
  },
  {
    title: "Projeto Luminotécnico",
    desc: "A arte de iluminar com funcionalidade e beleza.",
    img: lightIcon,
    details:
      "Um projeto luminotécnico bem executado tem o poder de realçar a arquitetura, criar cenários e influenciar o bem-estar. Analisamos cada detalhe para planejar uma iluminação que combine eficiência energética com o toque de aconchego e sofisticação ideal para o seu ambiente.",
  },
  {
    title: "Paisagismo",
    desc: "Integração perfeita entre o interior e o exterior.",
    img: outdoorIcon,
    details:
      "Levamos a nossa paixão pelo design para o seu jardim e áreas externas. Através do paisagismo, criamos ambientes que convidam ao relaxamento e à conexão com a natureza, harmonizando a estética com a funcionalidade e a manutenção do espaço.",
  },
];

export function Services() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  const handleOpen = (index: number) => {
    setSelected(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelected(null);
  };

  return (
    <section id="services" className="px-10 py-20 bg-neutral-100 ">
      <div className="px-8 max-w-7xl mx-auto ">
        <div className="flex items-center gap-4 pb-10">
          <span className="w-12 h-0.5 bg-black"></span>
          <h2 className="text-3xl md:text-4xl font-bold">Nossos Serviços</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              onClick={() => handleOpen(i)}
              className="p-6 bg-white rounded shadow hover:shadow-lg transition cursor-pointer"
            >
              <img src={s.img} alt={s.title} className="mb-4" />
              <h3 className="font-semibold text-xl mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <Modal open={open} footer={null} onCancel={handleClose} centered>
        {selected !== null && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">{services[selected].title}</h2>
            <p className="text-gray-700">{services[selected].details}</p>
          </div>
        )}
      </Modal>
    </section>
  );
}
