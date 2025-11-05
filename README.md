# 👻 Kit Componentes

[![npm version](https://img.shields.io/npm/v/@gothd/kit-componentes?color=blue&logo=npm)](https://www.npmjs.com/package/@gothd/kit-componentes)
[![GitHub Pages](https://img.shields.io/badge/gh--pages-deployed-brightgreen?logo=github)](https://gothd.github.io/kit-componentes/wc/latest/kit-componentes.js)

Biblioteca de componentes UI disponível em **duas formas de consumo**:

- **Web Components**: distribuídos via GitHub Pages, prontos para uso em qualquer projeto (React, Vue, Angular ou vanilla).
- **React Package**: publicado no npm sob o namespace `@gothd/kit-componentes`.

---

## 🚀 Instalação (React)

```bash
npm install @gothd/kit-componentes
# ou
yarn add @gothd/kit-componentes
```

### Uso básico (componentes compostos)

```tsx
import { Card } from "@gothd/kit-componentes";

export default function App() {
  return (
    <Card title="Título" description="Exemplo">
      Sou um Card
    </Card>
  );
}
```

### Uso de primitivos de UI

```tsx
import { Button } from "@gothd/kit-componentes/ui";

export default function App() {
  return (
    <Button variant="outline">Enviar</Button>
  );
}
```

### Estilos

```tsx
import "@gothd/kit-componentes/styles.css";
```

---

### Estilos no React

```tsx
// Estilos essenciais para os componentes React
import "@gothd/kit-componentes/styles.css";

// Se quiser todas as classes do Tailwind (tema base completo)
import "@gothd/kit-componentes/styles/index.css";
```

| Import | Conteúdo | Uso recomendado |
|--------|----------|-----------------|
| `@gothd/kit-componentes/styles.css` | Estilos essenciais React | Projetos React que só usam os componentes |
| `@gothd/kit-componentes/styles/index.css` | Tema base completo (Tailwind) | Projetos React que querem utilitários Tailwind sem configurar Tailwind |
| `https://gothd.github.io/kit-componentes/wc/latest/index.css` | Tema base completo (Tailwind) | Projetos que consomem via Web Components |

---

### 📦 Estrutura do pacote React (atualizada)

- `@gothd/kit-componentes` → componentes compostos  
- `@gothd/kit-componentes/ui` → primitivos de UI  
- `@gothd/kit-componentes/hooks` → hooks utilitários  
- `@gothd/kit-componentes/utils` → funções auxiliares  
- `@gothd/kit-componentes/styles.css` → estilos essenciais React  
- `@gothd/kit-componentes/styles/index.css` → tema base completo (Tailwind)  

---


## 🌐 Uso via Web Components (sem npm)

A biblioteca oferece dois formatos de consumo via GitHub Pages, ambos registrando os componentes em `window.KitComponentes`:

- **Bundle global**: registra todos os componentes de uma vez
- **Bundles individuais**: cada componente é distribuído separadamente, com escopo de estilo otimizado

### Importando a versão mais recente

```html
<!-- Bundle global -->
<script type="module" src="https://gothd.github.io/kit-componentes/wc/latest/kit-componentes.js"></script>

<!-- Bundle individual -->
<script type="module" src="https://gothd.github.io/kit-componentes/wc/latest/kc-button.js"></script>
<script type="module" src="https://gothd.github.io/kit-componentes/wc/latest/kc-card.js"></script>
```

### Importando uma versão específica

```html
<!-- Bundle global -->
<script type="module" src="https://gothd.github.io/kit-componentes/wc/0.6.0/kit-componentes.js"></script>

<!-- Bundle individual -->
<script type="module" src="https://gothd.github.io/kit-componentes/wc/0.6.0/kc-button.js"></script>
<script type="module" src="https://gothd.github.io/kit-componentes/wc/0.6.0/kc-card.js"></script>
```

### Exemplo de uso

```html
<kc-button variant="primary">Enviar</kc-button>

<kc-card>
  <h3 slot="title">Card</h3>
  <p slot="description">Este é um card simples usando o Web Component.</p>
</kc-card>
```

> Todos os componentes são registrados com prefixo `kc-` e ficam acessíveis via `window.KitComponentes`, independentemente do formato de importação.

---

### Estilos nos Web Components

Além dos bundles JS, agora o pacote WC também distribui o tema base completo:

```html
<!-- Tema base completo (todas as classes do Tailwind) -->
<link rel="stylesheet" href="https://gothd.github.io/kit-componentes/wc/latest/index.css">

<!-- Bundle global de componentes -->
<script type="module" src="https://gothd.github.io/kit-componentes/wc/latest/kit-componentes.js"></script>
```

---

## 🛠️ Scripts principais

- `npm run build:react` → gera o pacote React em `dist/react`
- `npm run build:wc` → gera os Web Components em `dist/wc`
- `npm run build:prod` → build completo (React + WC)
- `npm run dev` → playground de desenvolvimento

---

## 📖 Roadmap

- [x] Deploy automático dos Web Components no GitHub Pages
- [x] Publicação do pacote React no npm
- [ ] Showcase interativo (playground) publicado junto ao pacote WC
- [ ] Documentação detalhada de cada componente