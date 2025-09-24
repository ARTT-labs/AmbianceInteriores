import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";

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
    text:
      "Working with your design team was an absolute pleasure. The attention to detail and creativity exceeded my expectations. Thank you for making my home beautiful!",
    name: "Sophie Carter",
    location: "New York, USA",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: "test2",
    text:
      "Exceptional service! From the initial consultation to the final reveal, your team demonstrated professionalism and a keen eye for design. Highly recommend!",
    name: "James Bennett",
    location: "Toronto, Canada",
    avatar: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    id: "test3",
    text:
      "Nossa sala nunca foi tão aconchegante — detalhamento impecável e entrega no prazo.",
    name: "Mariana",
    location: "São Paulo, BR",
    avatar: "https://randomuser.me/api/portraits/women/30.jpg",
  },
];

export function Feedbacks() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(i + 1, testimonials.length - 2)); // show 2 at a time

  // ensure slice bounds
  const visible = testimonials.slice(index, index + 2);

  return (
    <section id="testimonials" className="px-6 md:px-12 lg:px-24 py-16 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left image + controls */}
        <div className="order-2 lg:order-1 lg:col-span-1">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1586023492121-1ec7a43f4d60?w=1200&q=80"
              alt="project"
              className="rounded-lg object-cover w-full h-96"
            />
            <div className="absolute left-3 bottom-3 flex gap-2">
              <button
                onClick={() => prev()}
                className="p-2 bg-white rounded shadow hover:bg-gray-100"
                aria-label="previous testimonial"
              >
                <FiChevronLeft />
              </button>
              <button
                onClick={() => next()}
                className="p-2 bg-white rounded shadow hover:bg-gray-100"
                aria-label="next testimonial"
              >
                <FiChevronRight />
              </button>
            </div>
          </div>
        </div>

        {/* Heading */}
        <div className="order-1 lg:order-2 lg:col-span-2 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="w-12 h-0.5 bg-black"></span>
            <h2 className="text-3xl md:text-4xl font-bold">Feedbacks</h2>
          </div>
        </div>

        {/* testimonial cards */}
        <div className="order-3 lg:order-3 lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {visible.map((t, idx) => (
            <motion.blockquote
              key={t.id}
              className="bg-neutral-900 text-white p-6 rounded shadow-lg relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
            >
              
              <p className="text-sm leading-relaxed">{t.text}</p>

              <div className="flex items-center gap-3 mt-6">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-white"
                />
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-white/70">{t.location}</div>
                </div>
              </div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
