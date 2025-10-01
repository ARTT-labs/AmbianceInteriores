import { motion } from "framer-motion";
import "./Feedbacks.css"; // Certifique-se de criar este arquivo CSS

type Testimonial = {
  id: string;
  text: string;
  name: string;
  location?: string;
  avatar?: string;
};

const testimonials: Testimonial[] = [
  {
    id: "test1",
    text: "A Ambiance Interiores transformou completamente meu apartamento! A qualidade da entrega e a atenção aos detalhes superaram todas as minhas expectativas. O resultado ficou incrível, e me sinto em casa.",
    name: "Carolina Silva",
    location: "Recife, PE",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: "test2",
    text: "Os profissionais da Ambiance são extremamente capacitados e atenciosos. Desde o primeiro contato até a finalização, tudo foi conduzido com grande profissionalismo. Recomendo muito!",
    name: "Lucas Oliveira",
    location: "Fortaleza, CE",
    avatar: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    id: "test3",
    text: "Fiquei impressionada com a facilidade de comunicação. Minhas ideias foram compreendidas e incorporadas ao projeto de forma fluida. O projeto ficou completo e inovador, exatamente o que eu sonhava!",
    name: "Isabela Santos",
    location: "Recife, PE",
    avatar: "https://randomuser.me/api/portraits/women/30.jpg",
  },
  {
    id: "test4",
    text: "A entrega foi impecável e dentro do prazo, algo raro hoje em dia. O projeto da Ambiance Interiores trouxe uma nova vida para minha casa, com soluções que eu jamais imaginaria. Super recomendo!",
    name: "Mateus Costa",
    location: "Gravatá, PE",
    avatar: "https://randomuser.me/api/portraits/men/58.jpg",
  },
  {
    id: "test5",
    text: "Com a Ambiance, tive a certeza de que meu investimento valeu a pena. A equipe é altamente profissional, o projeto é completo e inovador, e a qualidade dos materiais é excelente.",
    name: "Ana Clara Lima",
    location: "Rio de Janeiro, RJ",
    avatar: "https://randomuser.me/api/portraits/women/42.jpg",
  },
  {
    id: "test6",
    text: "Desde o planejamento até a execução, a Ambiance Interiores demonstrou um talento incrível. O design é inovador e a funcionalidade do espaço melhorou demais. Profissionais realmente capacitados!",
    name: "Rafael Pereira",
    location: "Recife, PE",
    avatar: "https://randomuser.me/api/portraits/men/70.jpg",
  },
];

const allTestimonials = [...testimonials, ...testimonials];

export function Feedbacks() {
  const cardColors = ["bg-neutral-100", "bg-neutral-300", "bg-neutral-200"];

  return (
    <section
      id="testimonials"
      className="px-6 md:px-12 lg:px-24 py-16 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto h-full">
        <div className="order-1 lg:order-2 lg:col-span-2 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="w-12 h-0.5 bg-black"></span>
            <h2 className="text-3xl md:text-4xl font-bold">
              O que os clientes falam sobre nós?
            </h2>
          </div>
        </div>

        <div className="flex-col gap-8 max-w-full">
          <div className="scrolling-container my-8">
            <div className="scrolling-track">
              {allTestimonials.map((t, idx) => (
                <motion.div
                  key={`${t.id}-${idx}`}
                  className="testimonial-card flex-none w-[320px] p-4"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.5 }}
                >
                  <div
                    className={`${
                      cardColors[idx % cardColors.length]
                    } p-6 rounded-lg shadow-md h-full flex flex-col justify-between`}
                  >
                    <p className="text-neutral-800 text-sm leading-relaxed mb-4">
                      {t.text}
                    </p>
                    <div className="flex items-center mt-auto">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-10 h-10 rounded-full object-cover mr-3"
                      />
                      <div>
                        <div className="font-semibold text-neutral-900">
                          {t.name}
                        </div>
                        <div className="text-xs text-neutral-600">
                          {t.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="scrolling-container my-8">
            <div className="scrolling-track-reversed">
              {allTestimonials.map((t, idx) => (
                <motion.div
                  key={`${t.id}-${idx}`}
                  className="testimonial-card flex-none w-[320px] p-4"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.5 }}
                >
                  <div
                    className={`${
                      cardColors[idx % cardColors.length]
                    } p-6 rounded-lg shadow-md h-full flex flex-col justify-between`}
                  >
                    <p className="text-neutral-800 text-sm leading-relaxed mb-4">
                      {t.text}
                    </p>
                    <div className="flex items-center mt-auto">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-10 h-10 rounded-full object-cover mr-3"
                      />
                      <div>
                        <div className="font-semibold text-neutral-900">
                          {t.name}
                        </div>
                        <div className="text-xs text-neutral-600">
                          {t.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
