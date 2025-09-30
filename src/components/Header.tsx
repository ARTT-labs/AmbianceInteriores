import image from "../assets/logoAmbiance.svg";
import { Link } from "react-scroll";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full justify-between px-8 h-16 bg-white/80 backdrop-blur z-50 shadow-md">
      <div className="max-w-7xl flex items-center justify-between h-full mx-auto">
        <div className="flex-shrink-0">
          <img src={image} alt="Logo" className="h-10" />
        </div>
        <nav className="absolute left-1/2 transform -translate-x-1/2">
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
        <div>
          <Link to="contact" smooth={true} duration={500}>
            <button className="bg-neutral-900 text-white px-4 py-2 rounded hover:bg-neutral-700 cursor-pointer">
              Contato
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};
