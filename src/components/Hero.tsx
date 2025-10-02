import { motion } from "framer-motion";
import image from "../assets/imgHero.svg";
import { Link } from "react-scroll";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center bg-neutral-100 py-16"
    >
      <div className="pt-1.5 px-8 gap-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center h-full">
        <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight "
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Transformamos espaços em ambientes que contam a sua história.
          </motion.h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-xl">
            Consultoria e execução em design de interiores residenciais e
            comerciais.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center w-full">
            <div>
              <h3 className="text-4xl font-bold text-gray-900">100+</h3>
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
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hover:underline cursor-pointer"
          >
            <button className="mt-6 bg-neutral-900 text-white px-6 py-3 rounded hover:bg-neutral-700 cursor-pointer transition">
              Solicite um orçamento gratuito
            </button>
          </Link>
        </div>
        <div className="flex-1 justify-center w-full md:w-auto mt-12 md:mt-0 hidden md:flex">
          <img
            src={image}
            alt="Logo"
            className="w-full max-w-sm md:max-w-md lg:max-w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
