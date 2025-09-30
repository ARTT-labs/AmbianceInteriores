import { motion } from "framer-motion";
import image from "../assets/imgHero.svg";

export function Hero() {
  return (
    <section
      id="home"
      className="max-h-200 h-screen flex flex-col justify-center bg-gray-50"
    >
      <div className="px-8 gap-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center h-full">
        <div className="flex-1 flex flex-col justify-between place-items-start h-3/4">
          <motion.h1
            className="text-6xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Transformamos espaços em ambientes que contam a sua história.
          </motion.h1>
          <p className="mt-4 text-xl text-gray-600 max-w-xl">
            Consultoria e execução em design de interiores residenciais e
            comerciais.
          </p>
          <button className="mt-6 bg-neutral-900 text-white px-6 py-3 rounded hover:bg-neutral-700 cursor-pointer transition">
            Solicite um orçamento gratuito
          </button>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className=" text-4xl font-bold text-gray-900">100+</h3>
              <p className="text-gray-600">Projetos Entregues</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-gray-900">90+</h3>
              <p className="text-gray-600">Clientes Satisfeitos</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-gray-900">80+</h3>
              <p className="text-gray-600">Projetos Executados</p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center h-3/4">
          <img src={image} alt="Logo" className="max-h-full object-contain" />
        </div>
      </div>
    </section>
  );
}
