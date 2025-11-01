import { useEffect } from "react";

import { env } from "../config/env";

function HomePage() {
  useEffect(() => {
    document.title = env.APP_NAME;
  }, []);

  /* const sections = [
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
  ]; */

  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1>Tipografia</h1>
        <h2>Subtítulo de exemplo</h2>
        <h3>Seção menor</h3>
        <p>Este é um parágrafo de exemplo seguindo a hierarquia tipográfica.</p>
        <small>Texto auxiliar em small</small>
      </section>

      <section>
        <h2>Cores</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-6">
          {/* Primária */}
          <div className="flex flex-col items-center">
            <div className="size-20 rounded-lg bg-primary"></div>
            <span className="mt-2 text-sm">
              Primary
              <br />
              #0f172a
            </span>
          </div>
          <div className="flex flex-col items-center">
            <div className="size-20 rounded-lg bg-primary-light"></div>
            <span className="mt-2 text-sm">
              Primary Light
              <br />
              #1e293b
            </span>
          </div>
          <div className="flex flex-col items-center">
            <div className="size-20 rounded-lg bg-primary-dark"></div>
            <span className="mt-2 text-sm">
              Primary Dark
              <br />
              #0c1420
            </span>
          </div>

          {/* Neutros */}
          <div className="flex flex-col items-center">
            <div className="size-20 rounded-lg bg-neutral"></div>
            <span className="mt-2 text-sm">
              Neutral
              <br />
              #374151
            </span>
          </div>
          <div className="flex flex-col items-center">
            <div className="size-20 rounded-lg bg-neutral-light"></div>
            <span className="mt-2 text-sm">
              Neutral Light
              <br />
              #6b7280
            </span>
          </div>
          <div className="flex flex-col items-center">
            <div className="size-20 rounded-lg bg-neutral-bg"></div>
            <span className="mt-2 text-sm">
              Neutral BG
              <br />
              #f9fafb
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
