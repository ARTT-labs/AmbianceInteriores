import { useState } from "react";
import emailjs from "emailjs-com";

export function Contact() {
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_xxx",
      "template_xxx",
      e.currentTarget,
      "publicKey_xxx"
    ).then(() => {
      setStatus("Mensagem enviada com sucesso! 🎉");
    }, () => {
      setStatus("Erro ao enviar. Tente novamente ❌");
    });
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="px-10 py-20 bg-white">
      <h2 className="text-4xl font-bold text-center mb-10">Entre em Contato</h2>
      <form onSubmit={sendEmail} className="max-w-2xl mx-auto grid gap-4">
        <input type="text" name="name" placeholder="Nome" required className="p-3 border rounded"/>
        <input type="email" name="email" placeholder="Email" required className="p-3 border rounded"/>
        <input type="text" name="phone" placeholder="Telefone" className="p-3 border rounded"/>
        <textarea name="message" placeholder="Mensagem" required className="p-3 border rounded h-32"/>
        <button className="bg-black text-white py-3 rounded hover:bg-gray-800 transition">
          Fale com um designer agora
        </button>
      </form>
      {status && <p className="text-center mt-4">{status}</p>}
    </section>
  );
}
