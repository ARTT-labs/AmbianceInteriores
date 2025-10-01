import { useState } from "react";
import { Modal } from "antd"; // Importe o componente Modal
import image from "../assets/aboutUS.png"; // Imagem da seção "Sobre Nós"
import modalImage from "../assets/modalAbout.png"; // Nova imagem para o modal (crie ou use uma existente)

export function About() {
  const [isModalVisible, setIsModalVisible] = useState(false); // Estado para controlar a visibilidade do modal

  // Funções para abrir e fechar o modal
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <img
          src={image}
          alt="Equipe Ambiance"
          className="rounded-lg shadow-lg"
        />
        <div className="flex-1 flex flex-col justify-between place-items-start h-full">
          <div className="flex items-center gap-4">
            <span className="w-12 h-0.5 bg-black"></span>
            <h2 className="text-3xl md:text-4xl font-bold">Sobre Nós</h2>
          </div>
          <p className="text-neutral-600 mb-4">
            A Ambiance Interiores nasceu da{" "}
            <b>paixão por transformar espaços em lares</b>. Desde a nossa
            fundação em <b>Recife, Pernambuco</b>, dedicamos nossa expertise a
            criar ambientes que não apenas impressionam visualmente, mas que
            também <b>refletem a essência e a história de quem os habita</b>.{" "}
            <br />
            <br />
            Para nós, o design de interiores vai muito além da estética.
            <b>
              Acreditamos que um ambiente bem planejado tem o poder de impactar
              positivamente o bem-estar, a produtividade e a felicidade
            </b>
            . Nossa missão é combinar funcionalidade, inovação e beleza para
            desenvolver projetos que se encaixam perfeitamente no seu estilo de
            vida.
            <br />
            <br />
            Na Ambiance Interiores, não apenas projetamos ambientes, nós criamos
            experiências. Convidamos você a embarcar conosco nessa jornada para
            <b> construir o espaço dos seus sonhos</b>.
          </p>
          <button
            onClick={showModal}
            className="px-6 py-3 border cursor-pointer border-black text-black rounded hover:bg-black hover:text-white transition"
          >
            Saiba Mais
          </button>
        </div>
      </div>

      <Modal
        title={null}
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={1000}
        centered
        className="modern-about-modal"
      >
        <div className="grid md:grid-cols-2 gap-8 items-center p-6">
          <div className="flex-1 flex flex-col justify-between place-items-start h-full">
            <div className="mb-8">
              <div className="flex items-center gap-4">
                <span className="w-12 h-0.5 bg-black"></span>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Nossos Valores
                </h2>
              </div>
            </div>
            <img
              src={modalImage}
              alt="Design de Interiores Moderno"
              className="rounded-lg object-cover w-full h-auto max-h-[400px]"
            />
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <h4 className="text-xl font-semibold text-neutral-800 mb-2">
                Design sob Medida
              </h4>
              <p className="text-neutral-700 leading-relaxed">
                Cada projeto é uma nova história. Mergulhamos nas suas
                necessidades e inspirações para criar{" "}
                <b>espaços que são uma extensão genuína da sua personalidade</b>
                , garantindo que cada canto reflita quem você é.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-neutral-800 mb-2">
                Qualidade e Profissionalismo
              </h4>
              <p className="text-neutral-700 leading-relaxed">
                Comprometemo-nos com a <b>excelência em cada detalhe</b>. Desde
                a seleção de materiais nobres até a execução impecável, nossa
                equipe de especialistas garante que seu projeto seja entregue
                com o mais alto padrão.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-neutral-800 mb-2">
                Transparência e Parceria
              </h4>
              <p className="text-neutral-700 leading-relaxed">
                Construímos relações baseadas na confiança. Do planejamento à
                finalização, mantemos uma{" "}
                <b>comunicação aberta e transparente</b>, guiando você em cada
                passo para uma experiência tranquila e satisfatória.
              </p>
            </div>
            <button
              onClick={handleCancel}
              className="mt-4 px-6 py-3 bg-black text-white rounded cursor-pointer hover:bg-neutral-800 transition self-start"
            >
              Fechar
            </button>
          </div>
        </div>
      </Modal>
    </section>
  );
}
