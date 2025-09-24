//import image from "./image.svg";
//import "./style.css";
//import vector2 from "./vector-2.svg";
//import vector from "./vector.svg";

export const Header = () => {
    return (
    <header className="flex items-center justify-between px-8 h-16 relative bg-white shadow">
      <div className="flex-shrink-0">
        <img src="/logo.png" alt="Logo" className="h-10" />
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

      {/* Botão à direita */}
      <div>
        <button className="bg-neutral-900 text-white px-4 py-2 rounded hover:bg-blue-600">
          Contato
        </button>
      </div>
    </header>
  );
};


