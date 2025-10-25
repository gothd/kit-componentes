import { env } from "../config/env";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-600">
          {env.APP_NAME}
        </h1>
        <nav className="space-x-6">
          <a href="#" className="text-gray-700 hover:text-indigo-600">
            Início
          </a>
          <a href="#" className="text-gray-700 hover:text-indigo-600">
            Projetos
          </a>
          <a href="#" className="text-gray-700 hover:text-indigo-600">
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}
