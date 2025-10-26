import { Link } from "react-router-dom";

export default function Templates() {
  const templates = [
    {
      name: "Landing Page",
      description: "Modelo de página inicial moderna para startups e produtos.",
      path: "/templates/landing",
    },
    {
      name: "E-commerce",
      description: "Layout de loja online com catálogo e carrinho.",
      path: "/templates/ecommerce",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Templates</h1>
      <p className="text-lg text-gray-600 mb-12 text-center">
        Explore os modelos prontos que você pode usar como ponto de partida.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {templates.map((tpl) => (
          <div
            key={tpl.name}
            className="border rounded-lg shadow hover:shadow-lg transition p-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-2">{tpl.name}</h2>
              <p className="text-gray-600 mb-4">{tpl.description}</p>
            </div>
            <Link
              to={tpl.path}
              className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 text-center"
            >
              Ver Template
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
