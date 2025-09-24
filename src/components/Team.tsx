import React from "react";
import { motion } from "framer-motion";
import { FiInstagram, FiFacebook, FiLinkedin } from "react-icons/fi";

type Member = {
  id: string;
  name: string;
  role: string;
  avatar: string;
  socials?: { type: string; href: string }[];
};

const team: Member[] = [
  {
    id: "t1",
    name: "Esther Howards",
    role: "Founder & CEO",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    socials: [
      { type: "instagram", href: "#" },
      { type: "linkedin", href: "#" },
    ],
  },
  {
    id: "t2",
    name: "Cameron Williamson",
    role: "Marketing Head",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    socials: [
      { type: "facebook", href: "#" },
      { type: "linkedin", href: "#" },
    ],
  },
  {
    id: "t3",
    name: "Liam Cooper",
    role: "Marketing Head",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    socials: [
      { type: "instagram", href: "#" },
      { type: "facebook", href: "#" },
    ],
  },
];

export function Team() {
  return (
    <section id="team" className="px-6 md:px-12 lg:px-24 py-16 bg-gray-50">
      <div className="mb-8">
        <div className="flex items-center gap-4">
          <span className="w-12 h-0.5 bg-black"></span>
          <h2 className="text-3xl md:text-4xl font-bold">Nossos Profissionais</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {team.map((m, idx) => (
          <motion.div
            key={m.id}
            className="bg-white rounded shadow-sm overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: idx * 0.08 }}
          >
            <div className="relative">
              <img src={m.avatar} alt={m.name} className="w-full h-80 object-cover" />
              <div className="absolute top-3 right-3 flex gap-2">
                {m.socials?.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    className="p-2 bg-white/90 rounded-full shadow text-sm text-gray-700 hover:bg-black hover:text-white transition"
                    aria-label={s.type}
                  >
                    {s.type === "instagram" && <FiInstagram />}
                    {s.type === "facebook" && <FiFacebook />}
                    {s.type === "linkedin" && <FiLinkedin />}
                  </a>
                ))}
              </div>
            </div>

            <div className="p-4">
              <h3 className="font-semibold">{m.name}</h3>
              <p className="text-xs text-gray-500 mt-1">{m.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
