export default function TemplateEcommerce() {
  const products = [
    {
      id: 1,
      name: "Camiseta Básica",
      price: "R$ 79,90",
      image: "https://placehold.co/300x200?text=Camiseta",
    },
    {
      id: 2,
      name: "Tênis Esportivo",
      price: "R$ 249,90",
      image: "https://placehold.co/300x200?text=Tenis",
    },
    {
      id: 3,
      name: "Mochila Casual",
      price: "R$ 149,90",
      image: "https://placehold.co/300x200?text=Mochila",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 bg-neutral-bg text-neutral">
      <h1 className="text-center mb-8">Loja Virtual</h1>
      <p className="text-center mb-12">
        Exemplo de vitrine de produtos para um e‑commerce.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border rounded-lg shadow-md p-4 flex flex-col"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3>{product.name}</h3>
            <p className="mb-4">{product.price}</p>
            <button className="mt-auto px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark">
              Adicionar ao carrinho
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
