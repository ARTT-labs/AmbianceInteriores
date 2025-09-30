import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

type Project = {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  href?: string;
};

const projects: Project[] = [
  {
    id: "1",
    title: "Sobha Hearland II Villas",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    href: "#",
  },
  {
    id: "2",
    title: "Sobha Hearland II Villas",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80",
    href: "#",
  },
  {
    id: "3",
    title: "Sobha Hearland II Villas",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80",
    href: "#",
  },
  {
    id: "4",
    title: "Projeto Residencial X",
    excerpt: "Antes e depois de um espaço renovado.",
    image: "https://picsum.photos/seed/4/1200/800",
    href: "#",
  },
];

export function Portfolio() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const scrollByPage = (dir: number) => {
    const el = containerRef.current;
    if (!el) return;
    const distance = el.clientWidth; // scroll by visible width
    el.scrollBy({ left: dir * distance, behavior: "smooth" });
  };

  return (
    <section id="portfolio" className="px-6 md:px-12 lg:px-24 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <span className="w-12 h-0.5 bg-black"></span>
            <h2 className="text-3xl md:text-4xl font-bold">Portfólio</h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              aria-label="previous"
              onClick={() => scrollByPage(-1)}
              className="p-2 bg-white border rounded shadow hover:bg-gray-50"
            >
              <FiChevronLeft />
            </button>
            <button
              aria-label="next"
              onClick={() => scrollByPage(1)}
              className="p-2 bg-black text-white rounded shadow hover:opacity-90"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>

        <div
          ref={containerRef}
          className="overflow-x-auto scroll-smooth -mx-2 px-2"
          style={{ scrollbarGutter: "stable" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 min-w-[800px]">
            {projects.map((p, i) => (
              <motion.article
                key={p.id}
                className="bg-white rounded shadow-md overflow-hidden flex flex-col"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="h-44 md:h-56 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
                    <p className="text-sm text-gray-600">{p.excerpt}</p>
                  </div>
                  <div className="mt-4 text-right">
                    <a
                      href={p.href}
                      className="text-sm text-gray-700 underline"
                    >
                      Ver mais
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
