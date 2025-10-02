import { useState } from "react";
import image from "../assets/logoAmbiance.svg";
import { Link } from "react-scroll";
import {
  FiMenu,
  FiX,
  FiHome,
  FiInfo,
  FiBook,
  FiUsers,
  FiMail,
  FiCamera,
} from "react-icons/fi";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full justify-between px-8 h-16 bg-white/80 backdrop-blur z-50 shadow-md">
      <div className="max-w-7xl flex items-center justify-between h-full mx-auto">
        <div className="flex-shrink-0">
          <img src={image} alt="Logo" className="h-10" />
        </div>

        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex gap-8">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="hover:underline cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="hover:underline cursor-pointer"
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="hover:underline cursor-pointer"
              >
                Serviços
              </Link>
            </li>
            <li>
              <Link
                to="portfolio"
                smooth={true}
                duration={500}
                className="hover:underline cursor-pointer"
              >
                Portfólio
              </Link>
            </li>
            <li>
              <Link
                to="team"
                smooth={true}
                duration={500}
                className="hover:underline cursor-pointer"
              >
                Time
              </Link>
            </li>
          </ul>
        </nav>

        <div className="hidden md:block">
          <Link to="contact" smooth={true} duration={500}>
            <button className="bg-neutral-900 text-white px-4 py-2 rounded hover:bg-neutral-700 cursor-pointer">
              Contato
            </button>
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Abrir menu">
            <FiMenu size={24} />
          </button>
        </div>
      </div>

      <aside
        className={`fixed top-0 right-0 h-screen w-64 bg-white shadow-2xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden z-40`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <p className="text-xl md:text-xl">Menu</p>
          <button onClick={toggleMenu} aria-label="Fechar menu">
            <FiX size={24} />
          </button>
        </div>
        <ul className="flex flex-col text-lg">
          <li className="p-4 border-b border-neutral-100 hover:bg-neutral-50 transition-colors duration-200">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="flex items-center gap-4 cursor-pointer"
              onClick={closeMenu}
            >
              <FiHome size={20} />
              <span>Home</span>
            </Link>
          </li>
          <li className="p-4 border-b border-neutral-100 hover:bg-neutral-50 transition-colors duration-200">
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="flex items-center gap-4 cursor-pointer"
              onClick={closeMenu}
            >
              <FiInfo size={20} />
              <span>Sobre</span>
            </Link>
          </li>
          <li className="p-4 border-b border-neutral-100 hover:bg-neutral-50 transition-colors duration-200">
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="flex items-center gap-4 cursor-pointer"
              onClick={closeMenu}
            >
              <FiBook size={20} />
              <span>Serviços</span>
            </Link>
          </li>
          <li className="p-4 border-b border-neutral-100 hover:bg-neutral-50 transition-colors duration-200">
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              className="flex items-center gap-4 cursor-pointer"
              onClick={closeMenu}
            >
              <FiCamera size={20} />
              <span>Portfólio</span>
            </Link>
          </li>
          <li className="p-4 border-b border-neutral-100 hover:bg-neutral-50 transition-colors duration-200">
            <Link
              to="team"
              smooth={true}
              duration={500}
              className="flex items-center gap-4 cursor-pointer"
              onClick={closeMenu}
            >
              <FiUsers size={20} />
              <span>Time</span>
            </Link>
          </li>
          <li className="p-4 border-b border-neutral-100 hover:bg-neutral-50 transition-colors duration-200">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="flex items-center gap-4 cursor-pointer"
              onClick={closeMenu}
            >
              <FiMail size={20} />
              <span>Contato</span>
            </Link>
          </li>
        </ul>
      </aside>
    </header>
  );
};
