import { typedEntries } from "@utils/typedEntries";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { docs } from "./docsConfig";
import Contact from "./pages/contato";
import HomePage from "./pages/inicio";
import Templates from "./pages/templates";
import TemplateEcommerce from "./pages/templates/templateEcommerce";
import TemplateLanding from "./pages/templates/templateLanding";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-6xl mx-auto w-full py-8 px-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/templates/landing" element={<TemplateLanding />} />
          <Route path="/templates/ecommerce" element={<TemplateEcommerce />} />
          {/* Componentes */}
          {typedEntries(docs).flatMap(([, comps]) =>
            comps.map((doc) => (
              <Route
                key={doc.name}
                path={`/${doc.name.toLowerCase()}`}
                element={
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{doc.name}</h2>
                    <p className="mb-4 text-gray-600">{doc.description}</p>
                    <div className="border p-4 rounded">{doc.component}</div>
                  </div>
                }
              />
            ))
          )}
          <Route path="/contato" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
