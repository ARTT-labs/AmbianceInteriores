import { useRef, useState } from "react";
import { Carousel, Modal } from "antd";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import p1 from "../assets/minimalista.jpg";
import p2 from "../assets/areaGourmet.jpg";
import p3 from "../assets/coworking.png";
import p4 from "../assets/luminotecnico.jpg";

type Project = {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  description: string;
  href?: string;
};

const projects: Project[] = [
  {
    id: "1",
    title: "Cenários de Luz - Apartamento A",
    excerpt:
      "Um projeto luminotécnico que transformou um espaço comum em um ambiente acolhedor e funcional.",
    description:
      "Este projeto focado em iluminação foi desenvolvido para um apartamento residencial, utilizando diferentes tipos de luzes (quente, fria, pontual e indireta) para criar cenários variados. A iluminação de destaque realça obras de arte e texturas, enquanto a luz geral proporciona conforto visual, mostrando o poder da luminotécnica para definir a atmosfera de um lar.",
    image: p4,
    href: "#",
  },
  {
    id: "2",
    title: "Residencial Aconchego - Design Minimalista",
    excerpt:
      "A união perfeita de funcionalidade e elegância em um espaço minimalista e acolhedor.",
    description:
      "Uma renovação completa de um apartamento, com foco em um design minimalista e funcional. A paleta de cores neutras e a utilização de materiais naturais criam uma atmosfera de calma e sofisticação. Cada móvel foi escolhido para maximizar o espaço e a fluidez do ambiente, provando que 'menos é mais' quando se trata de conforto e estilo.",
    image: p1,
    href: "#",
  },
  {
    id: "3",
    title: "Espaço Colaborativo Urbano",
    excerpt:
      "Transformação de um espaço comercial em um ambiente de coworking moderno e dinâmico.",
    description:
      "Este projeto comercial desafia as convenções, convertendo um escritório tradicional em um espaço de coworking vibrante e flexível. Priorizamos a luz natural, a integração de áreas verdes internas e o uso de móveis modulares para incentivar a colaboração e a criatividade entre os usuários. O resultado é um ambiente de trabalho que inspira e energiza.",
    image: p3,
    href: "#",
  },
  {
    id: "4",
    title: "Oásis Urbano - Varanda Gourmet",
    excerpt:
      "Aconchego e natureza em meio à cidade, criando um refúgio para relaxar e socializar.",
    description:
      "Este projeto de paisagismo transforma uma varanda comum em um oásis urbano. A combinação de plantas tropicais e espécies nativas cria um microclima agradável e visualmente rico. A área gourmet foi integrada ao verde, com um deck de madeira e iluminação discreta, tornando o espaço perfeito para entretenimento e momentos de tranquilidade.",
    image: p2,
    href: "#",
  },
];

export function Portfolio() {
  const carouselRef = useRef<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const showModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="px-6 md:px-12 lg:px-24 py-16 bg-white">
      <div className="max-w-7xl mx-auto h-full">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <span className="w-12 h-0.5 bg-black"></span>
            <h2 className="text-3xl md:text-4xl font-bold">Portfólio</h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              aria-label="previous"
              onClick={() => carouselRef.current?.prev()}
              className="p-2 bg-white border rounded shadow hover:shadow-xl transition cursor-pointer hover:bg-neutral-900 hover:text-white hover:border-neutral-900"
            >
              <FiChevronLeft />
            </button>
            <button
              aria-label="next"
              onClick={() => carouselRef.current?.next()}
              className="p-2 bg-white border rounded shadow hover:shadow-xl transition cursor-pointer hover:bg-neutral-900 hover:text-white hover:border-neutral-900"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>

        <Carousel
          ref={carouselRef}
          autoplay
          autoplaySpeed={5000}
          infinite
          slidesToShow={3}
          slidesToScroll={1}
          responsive={[
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } },
          ]}
        >
          {projects.map((p, i) => (
            <div key={p.id} className="px-3 pb-6">
              <motion.article
                className={`
                  bg-white rounded shadow-md overflow-hidden flex flex-col
                  h-full min-h-[420px]
                  transition-all duration-300
                  hover:shadow-lg hover:-translate-y-1 cursor-pointer
                `}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="h-40 sm:h-44 md:h-48 overflow-hidden ">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transform"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
                    <p className="text-sm text-neutral-600 line-clamp-3">
                      {p.excerpt}
                    </p>
                  </div>
                  <div className="mt-4 text-right">
                    <button
                      onClick={() => showModal(p)}
                      className="text-sm text-neutral-700 underline cursor-pointer hover:text-neutral-900"
                    >
                      Ver mais
                    </button>
                  </div>
                </div>
              </motion.article>
            </div>
          ))}
        </Carousel>
      </div>

      <Modal
        title={null}
        open={isModalOpen}
        onOk={handleCloseModal}
        onCancel={handleCloseModal}
        footer={null}
        width={800}
        centered
      >
        {selectedProject && (
          <div className="flex flex-col">
            <div className="mb-6">
              <div className="flex items-center gap-4">
                <span className="w-12 h-0.5 bg-black"></span>
                <h2 className="text-3xl md:text-3xl font-bold">
                  {selectedProject.title}
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start max-h-[70vh] overflow-hidden">
              <div className="flex flex-col gap-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full rounded object-cover h-full max-h-[500px]"
                />
              </div>
              <div className="flex flex-col gap-4 max-h-[70vh] overflow-y-auto">
                <p className="text-neutral-800 leading-relaxed text-xl font-bold">
                  Detalhes do projeto:
                </p>
                <p className="text-neutral-800 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
