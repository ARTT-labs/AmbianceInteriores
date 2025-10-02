import { useState } from "react";
import emailjs from "emailjs-com";
import { FiPhone, FiMail, FiInstagram } from "react-icons/fi"; // Importando os novos ícones

export function Contact() {
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm("service_xxx", "template_xxx", e.currentTarget, "publicKey_xxx")
      .then(
        () => {
          setStatus("Mensagem enviada com sucesso!");
        },
        () => {
          setStatus("Erro ao enviar. Tente novamente.");
        }
      );
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-20 bg-neutral-100">
      <div className="px-8 max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <div className="flex-1 flex flex-col justify-between place-items-start h-full">
          <div className="flex items-center gap-4">
            <span className="w-12 h-0.5 bg-black"></span>
            <h2 className="text-3xl md:text-4xl font-bold">Contato</h2>
          </div>
          <p className="text-neutral-600">
            Estamos empolgados para <b>transformar suas ideias em realidade</b>.
            Se você deseja criar um projeto único e cheio de personalidade, a
            equipe da Ambiance Interiores está pronta para ajudar, pois a
            <b>
              {" "}
              nossa paixão é criar espaços que contam histórias e refletem a sua
              essência
            </b>
            .
          </p>

          <p className="text-neutral-600 mb-6">
            Preencha o formulário ao lado ou utilize nossos contatos abaixo.
            <br /> <b>Estamos animados para começar essa jornada com você</b>.
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-white/90 rounded-full shadow text-sm text-neutral-700 hover:bg-black hover:text-white transition cursor-pointer">
                <FiPhone className="text-xl text-neutral-300" />
              </div>

              <a
                href="tel:+5581999999999"
                className="text-neutral-600 hover:underline transition"
              >
                +55 (81) 9 9999-9999
              </a>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-2 bg-white/90 rounded-full shadow text-sm text-neutral-700 hover:bg-black hover:text-white transition cursor-pointer">
                <FiMail className="text-xl text-neutral-300" />
              </div>
              <a
                href="mailto:contato@ambianceinteriores.com"
                className="text-neutral-600 hover:underline transition"
              >
                contato@ambianceinteriores.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-2 bg-white/90 rounded-full shadow text-sm text-neutral-700 hover:bg-black  transition cursor-pointer">
                <FiInstagram className="text-xl text-neutral-300" />
              </div>
              <a
                href="https://www.instagram.com/ambianceinteriores"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:underline transition"
              >
                @ambianceinteriores
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={sendEmail} className="grid gap-4">
          <input
            type="text"
            name="name"
            placeholder="Nome"
            required
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black transition"
          />
          <input
            type="text"
            name="phone"
            placeholder="Telefone"
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black transition"
          />
          <textarea
            name="message"
            placeholder="Mensagem"
            required
            className="p-3 border rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-black transition"
          />
          <button className="bg-black text-white py-3 rounded-md hover:bg-neutral-800 hover:text-neutral-50 transition cursor-pointer">
            Fale com um designer agora
          </button>
          {status && <p className="text-center mt-4">{status}</p>}
        </form>
      </div>
    </section>
  );
}
