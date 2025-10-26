import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Input } from "../components/Input";

export default function Components() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      <section>
        <h1>Tipografia</h1>
        <h2>Subtítulo de exemplo</h2>
        <h3>Seção menor</h3>
        <p>Este é um parágrafo de exemplo seguindo a hierarquia tipográfica.</p>
        <small>Texto auxiliar em small</small>
      </section>

      <section>
        <h2>Cores</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          {/* Primária */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-lg bg-primary"></div>
            <span className="mt-2 text-sm">
              Primary
              <br />
              #0f172a
            </span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-lg bg-primary-light"></div>
            <span className="mt-2 text-sm">
              Primary Light
              <br />
              #1e293b
            </span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-lg bg-primary-dark"></div>
            <span className="mt-2 text-sm">
              Primary Dark
              <br />
              #0c1420
            </span>
          </div>

          {/* Neutros */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-lg bg-neutral"></div>
            <span className="mt-2 text-sm">
              Neutral
              <br />
              #374151
            </span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-lg bg-neutral-light"></div>
            <span className="mt-2 text-sm">
              Neutral Light
              <br />
              #6b7280
            </span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-lg bg-neutral-bg"></div>
            <span className="mt-2 text-sm">
              Neutral BG
              <br />
              #f9fafb
            </span>
          </div>
        </div>
      </section>

      <section>
        <h2>Botões</h2>
        <div className="flex gap-4">
          <Button variant="primary">Primário</Button>
          <Button variant="secondary">Secundário</Button>
          <Button variant="outline">Outline</Button>
        </div>
      </section>

      <section>
        <h2>Inputs</h2>
        <div className="space-y-4">
          <Input label="Nome" placeholder="Digite seu nome" />
          <Input label="Email" type="email" placeholder="seu@email.com" />
          <Input
            label="Senha"
            type="password"
            placeholder="********"
            error="Senha inválida"
          />
        </div>
      </section>

      <section>
        <h2>Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="Card 1" description="Descrição do card 1">
            <Button variant="primary">Ação</Button>
          </Card>
          <Card title="Card 2" description="Descrição do card 2">
            <Button variant="outline">Detalhes</Button>
          </Card>
          <Card title="Card 3" description="Descrição do card 3">
            <Button variant="secondary">Outro</Button>
          </Card>
        </div>
      </section>
    </div>
  );
}
