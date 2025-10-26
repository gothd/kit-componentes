export default function TemplateLanding() {
  return (
    <div className="bg-neutral-bg text-neutral">
      {/* Hero */}
      <section className="text-center py-20 bg-primary text-white">
        <h1 className="text-white">Landing Page Moderna</h1>
        <p className="text-neutral-bg">
          Um template pronto para startups, produtos digitais e campanhas.
        </p>
        <a
          href="#features"
          className="inline-block mt-6 px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-neutral-bg"
        >
          Começar Agora
        </a>
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-center mb-12">O que este template oferece</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border rounded-lg shadow-md p-6 text-center">
            <h3>Rápido de implementar</h3>
            <p>Estrutura simples e otimizada para colocar no ar em minutos.</p>
          </div>
          <div className="bg-white border rounded-lg shadow-md p-6 text-center">
            <h3>Design Responsivo</h3>
            <p>Funciona em qualquer dispositivo, do celular ao desktop.</p>
          </div>
          <div className="bg-white border rounded-lg shadow-md p-6 text-center">
            <h3>Focado em conversão</h3>
            <p>Seções pensadas para captar leads e gerar resultados.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-20 bg-primary-dark text-white">
        <h2 className="text-white">Pronto para usar?</h2>
        <p className="text-neutral-bg">
          Personalize este template e publique sua landing em minutos.
        </p>
        <a
          href="#"
          className="inline-block mt-6 px-6 py-3 bg-white text-primary-dark font-semibold rounded-lg hover:bg-neutral-bg"
        >
          Baixar Template
        </a>
      </section>
    </div>
  );
}
