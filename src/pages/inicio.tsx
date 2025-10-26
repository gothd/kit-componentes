import { useEffect } from "react";

import { Link } from "react-router-dom";
import { env } from "../config/env";

function HomePage() {
  useEffect(() => {
    document.title = env.APP_NAME;
  }, []);

  const sections = [
    {
      name: "Templates",
      description: "Modelos prontos de páginas para diferentes casos de uso.",
      path: "/templates",
    },
    {
      name: "Componentes",
      description: "Showcase de botões, sliders, formulários e muito mais.",
      path: "/componentes",
    },
    {
      name: "Contato",
      description: "Entre em contato para suporte, dúvidas ou projetos.",
      path: "/contact",
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-5xl font-bold mb-6">Kit Inicial de Design System</h1>
      <p className="text-lg text-gray-600 mb-10">
        Explore os templates e componentes disponíveis para acelerar seus
        projetos.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sections.map((section) => (
          <div
            key={section.name}
            className="border rounded-lg shadow hover:shadow-lg transition p-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-2">{section.name}</h2>
              <p className="text-gray-600 mb-4">{section.description}</p>
            </div>
            <Link
              to={section.path}
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-center"
            >
              Acessar
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
