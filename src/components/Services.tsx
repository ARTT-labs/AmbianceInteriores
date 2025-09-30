import { useState } from "react";
import { Modal, Button } from "antd";

import icon from "../assets/InteriordesignIcon.svg";
import icon2 from "../assets/LightingdesignIcon.svg";
import icon3 from "../assets/OutdoordesignIcon.svg";

const services = [
  {
    title: "Consultoria de Interiores",
    desc: "Diagnóstico e planejamento de espaços.",
    img: icon,
    details:
      "Na consultoria de interiores, fazemos uma análise completa do seu ambiente para propor soluções personalizadas que atendam seu estilo e funcionalidade.",
  },
  {
    title: "Projetos 3D e Moodboards",
    desc: "Visualização realista antes da execução.",
    img: icon2,
    details:
      "Com projetos 3D e moodboards, você consegue visualizar de forma realista como ficará o espaço, facilitando tomadas de decisão e ajustes antes da execução.",
  },
  {
    title: "Reformas e Decoração Completa",
    desc: "Do planejamento à entrega.",
    img: icon3,
    details:
      "Oferecemos acompanhamento completo desde a fase inicial até a finalização, cuidando de cada detalhe da reforma ou decoração do seu ambiente.",
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
    <section id="services" className="px-10 py-20 bg-gray-50 ">
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

      <Modal
        open={open}
        onCancel={handleClose}
        footer={[
          <Button key="back" onClick={handleClose}>
            Voltar
          </Button>,
        ]}
        centered
      >
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
