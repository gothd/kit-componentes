import { Button } from "@components/ui/Button";
import { Input } from "@components/ui/Input";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { env } from "../config/env";

export default function Contato() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        env.VITE_EMAILJS_SERVICE_ID, // ID do serviço configurado no EmailJS
        env.VITE_EMAILJS_TEMPLATE_ID, // ID do template criado no EmailJS
        form.current,
        env.VITE_EMAILJS_PUBLIC_KEY // chave pública (não use a privada!)
      )
      .then(() => {
        alert("Mensagem enviada com sucesso!");
        form.current?.reset();
      })
      .catch(() => {
        alert("Erro ao enviar. Tente novamente.");
      });
  };

  return (
    <div className="min-h-screen bg-neutral-bg flex items-center justify-center px-6">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-md p-8">
        <h1 className="mb-2">Contato</h1>
        <p className="mb-8 text-neutral-light">
          Preencha o formulário abaixo e entraremos em contato com você.
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          {/* Grid responsiva para Nome e Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input label="Nome" name="nome" placeholder="Seu nome" required />
            <Input
              label="Email"
              type="email"
              name="email"
              placeholder="seu@email.com"
              required
            />
          </div>

          <Input
            label="Assunto"
            name="assunto"
            placeholder="Sobre o que deseja falar?"
            required
          />

          {/* Textarea Mensagem */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-neutral">Mensagem</label>
            <textarea
              name="mensagem"
              placeholder="Digite sua mensagem"
              required
              className="block w-full min-h-40 px-4 py-3 rounded-lg border border-neutral-light bg-white
                         text-neutral placeholder-neutral-light
                         focus:outline-none focus:ring-2 focus:ring-primary resize-y"
            />
          </div>

          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </form>
      </div>
    </div>
  );
}
