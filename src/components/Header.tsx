import image from "../assets/logoAmbiance.svg";
//import "./style.css";

export const Header = () => {
    return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between px-8 h-16 bg-white/80 backdrop-blur z-50 shadow-md">
      <div className="flex-shrink-0">
        <img src={image} alt="Logo" className="h-10" />
      </div>
      <nav className="absolute left-1/2 transform -translate-x-1/2">
        <ul className="flex gap-8">
          <li>
            <a href="#" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Sobre
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Portfólio
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contato
            </a>
          </li>
        </ul>
      </nav>
      <div>
        <button className="bg-neutral-900 text-white px-4 py-2 rounded hover:bg-neutral-700 cursor-pointer">
          Contato
        </button>
      </div>
    </header>
  );
};


