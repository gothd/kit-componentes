import { Link } from "react-router-dom";
import { env } from "../config/env";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-xl font-bold text-indigo-600">{env.APP_NAME}</h1>
        </Link>
        <nav className="flex gap-4 lg:gap-6">
          <Link to="/templates" className="text-gray-700 hover:text-indigo-600">
            Templates
          </Link>
          <Link
            to="/componentes"
            className="text-gray-700 hover:text-indigo-600"
          >
            Componentes
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-indigo-600">
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}
