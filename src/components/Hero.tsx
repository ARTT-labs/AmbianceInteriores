import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-start px-10 bg-gray-50">
      <motion.h1 
        className="text-6xl font-bold text-gray-900"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Transformamos espaços em ambientes que contam a sua história.
      </motion.h1>
      <p className="mt-4 text-xl text-gray-600 max-w-xl">
        Consultoria e execução em design de interiores residenciais e comerciais.
      </p>
      <button className="mt-6 px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition">
        Solicite um orçamento gratuito
      </button>
    </section>
  );
}
