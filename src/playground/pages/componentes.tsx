import { Card } from "@components/Card";
import { Button } from "@components/ui/Button";
import { Input } from "@components/ui/Input";

export default function Components() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
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
