import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Components from "./pages/componentes";
import Contact from "./pages/contato";
import HomePage from "./pages/inicio";
import Templates from "./pages/templates";
import TemplateEcommerce from "./pages/templates/templateEcommerce";
import TemplateLanding from "./pages/templates/templateLanding";

function App() {
  return (
    <Router basename="/kit-componentes">
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/templates/landing" element={<TemplateLanding />} />
            <Route
              path="/templates/ecommerce"
              element={<TemplateEcommerce />}
            />
            <Route path="/componentes" element={<Components />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
