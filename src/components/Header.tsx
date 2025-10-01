import { useState } from "react";
import image from "../assets/logoAmbiance.svg";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi"; // Importamos os ícones de menu e fechar

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

        {/* Menu principal - visível apenas em telas maiores */}
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

        {/* Botão de contato - visível apenas em telas maiores */}
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
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-md transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden z-40`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} aria-label="Fechar menu">
            <FiX size={24} />
          </button>
        </div>
        <ul className="flex flex-col gap-4 p-4 text-lg bg-white shadow-md">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="hover:underline cursor-pointer block py-2"
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="hover:underline cursor-pointer block py-2"
              onClick={closeMenu}
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="hover:underline cursor-pointer block py-2"
              onClick={closeMenu}
            >
              Serviços
            </Link>
          </li>
          <li>
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              className="hover:underline cursor-pointer block py-2"
              onClick={closeMenu}
            >
              Portfólio
            </Link>
          </li>
          <li>
            <Link
              to="team"
              smooth={true}
              duration={500}
              className="hover:underline cursor-pointer block py-2"
              onClick={closeMenu}
            >
              Time
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="hover:underline cursor-pointer block py-2"
              onClick={closeMenu}
            >
              Contato
            </Link>
          </li>
        </ul>
      </aside>
    </header>
  );
};
