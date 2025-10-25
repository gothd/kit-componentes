import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "./components/ui";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./components/ui";
import { Popover, PopoverTrigger, PopoverContent } from "./components/ui";
import { env } from "./config/env";
import { useEffect } from "react";

function PortfolioPage() {
  useEffect(() => {
    document.title = env.APP_NAME;
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <Hero />

        {/* Seção de serviços (Cards) */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Serviços</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card
              title="Portfólio"
              description="Monte um portfólio em até 3 dias."
            />
            <Card
              title="Ecommerce"
              description="Loja virtual pronta em até 7 dias."
            />
            <Card
              title="Landing Page"
              description="Capte leads com páginas rápidas."
            />
          </div>
        </section>

        {/* Seção com Tabs */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold mb-6">Mais sobre mim</h2>
          <Tabs defaultValue="sobre">
            <TabsList className="flex border-b border-gray-200">
              <TabsTrigger
                value="sobre"
                className="flex-1 px-4 py-2 text-center data-[state=active]:text-indigo-600 data-[state=active]:border-b-2 data-[state=active]:border-indigo-600"
              >
                Sobre
              </TabsTrigger>
              <TabsTrigger
                value="projetos"
                className="flex-1 px-4 py-2 text-center data-[state=active]:text-indigo-600 data-[state=active]:border-b-2 data-[state=active]:border-indigo-600"
              >
                Projetos
              </TabsTrigger>
              <TabsTrigger
                value="contato"
                className="flex-1 px-4 py-2 text-center data-[state=active]:text-indigo-600 data-[state=active]:border-b-2 data-[state=active]:border-indigo-600"
              >
                Contato
              </TabsTrigger>
            </TabsList>
            <TabsContent value="sobre" className="p-6">
              Sou freelancer e crio templates rápidos e acessíveis.
            </TabsContent>
            <TabsContent value="projetos" className="p-6">
              Lista de projetos entregues.
            </TabsContent>
            <TabsContent value="contato" className="p-6">
              <div>
                Telefone:{" "}
                <a
                  href={`tel:${env.CONTACT_PHONE_NUMBER}`}
                  className="mt-2 text-gray-600"
                >
                  {env.CONTACT_PHONE_LABEL}
                </a>
              </div>
              <div>
                Email:{" "}
                <a
                  href={`mailto:${env.CONTACT_EMAIL}`}
                  className="mt-2 text-gray-600"
                >
                  {env.CONTACT_EMAIL}
                </a>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* FAQ com Accordion */}
        <section className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold mb-6">Perguntas Frequentes</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="w-full flex justify-between px-4 py-3">
                Como funciona?
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 text-gray-600">
                Eu entrego templates prontos em poucos dias.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="w-full flex justify-between px-4 py-3">
                É acessível?
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 text-gray-600">
                Sim, todos os componentes usam Radix UI.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* CTA com Popover/Dialog */}
        <section className="text-center py-16 bg-indigo-600 text-white">
          <h2 className="text-3xl font-bold">Pronto para começar?</h2>
          <p className="mt-2">Clique abaixo e fale comigo agora mesmo.</p>
          <div className="mt-6 flex justify-center gap-4">
            <Popover>
              <PopoverTrigger className="px-6 py-3 bg-white text-indigo-600 rounded-lg">
                Ver mais
              </PopoverTrigger>
              <PopoverContent>
                <p className="text-gray-800">
                  Aqui você pode colocar links extras ou informações rápidas.
                </p>
              </PopoverContent>
            </Popover>

            <Dialog>
              <DialogTrigger className="px-6 py-3 bg-indigo-800 rounded-lg">
                Abrir Modal
              </DialogTrigger>
              <DialogContent>
                <DialogTitle className="text-lg font-bold">
                  Entre em contato
                </DialogTitle>
                <DialogDescription className="mt-2 text-gray-600">
                  Preencha o formulário ou envie um e‑mail.
                </DialogDescription>
                <DialogClose className="mt-4 px-4 py-2 bg-gray-200 rounded-lg">
                  Fechar
                </DialogClose>
              </DialogContent>
            </Dialog>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default PortfolioPage;
