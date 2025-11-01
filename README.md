# 👻 Kit Componentes

![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4.1-0f172a?style=for-the-badge&logo=tailwindcss&logoColor=white)

Um kit de **componentes distribuíveis encapsulados para web** (Web Components), que também podem ser consumidos como **componentes React** quando publicado como package.  
Construído com **React + Vite + React Router** e estilizado com **Tailwind CSS v4.1**, este projeto oferece uma base elegante, confiável e fácil de expandir para **portfólios, e‑commerce e landing pages**.

---

## 🎨 Design System

Este projeto utiliza o Tailwind v4.1 com tokens definidos diretamente no `@theme` do `style.css`.

### Paleta principal
- **Primária:** Azul petróleo `#0f172a`  
- **Primária clara:** `#1e293b`  
- **Primária escura:** `#0c1420`  
- **Neutros:** `#374151`, `#6b7280`, `#f9fafb`

### Tipografia
- Fonte padrão: **Inter, sans-serif**
- Hierarquia:  
  - **h1** → `text-5xl md:text-6xl font-extrabold tracking-tight text-primary`  
  - **h2** → `text-3xl md:text-4xl font-bold tracking-tight text-primary-dark`  
  - **h3** → `text-2xl font-semibold text-neutral`  
  - **p** → `text-base leading-relaxed text-neutral-light`  
  - **small** → `text-sm text-neutral-light`

### Exemplo de uso
```tsx
<button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark">
  Botão Primário
</button>
```

---

## 📦 Estrutura

- `/pages` → Páginas principais (Home, Templates, Components, Contact)  
- `/componentes` → Componentes reutilizáveis (Header, Footer, Cards, UI)  
- `/templates` → Exemplos prontos (Landing, Ecommerce)  
- `/docsConfig.tsx` → Showcase de documentação com exemplos de uso  

---

## 🛠️ Desenvolvimento

Para rodar o servidor de desenvolvimento e visualizar a documentação interativa com **componentes e templates**:

```bash
# Instalar dependências
npm install

# Rodar servidor de desenvolvimento
npm run dev
```

Acesse em [http://localhost:5173](http://localhost:5173).

---

## 📚 Documentação

A documentação interna exibe exemplos práticos de cada componente e template, permitindo testar interações e copiar snippets prontos.  
Ela é acessível diretamente no servidor de desenvolvimento.

---

## 📤 Distribuição

Os componentes deste kit serão **encapsulados como Web Components** e também exportados como **Componentes React**.  
Isso garante que possam ser usados em qualquer stack (Vanilla JS, Vue, Angular, Svelte) ou diretamente em projetos React.

### Exemplo de uso futuro

**Como Web Component:**
```html
<kc-button variant="primary">Clique aqui</kc-button>
```

**Como Componente React:**
```tsx
import { Button } from "kit-componentes";

export default function App() {
  return <Button variant="primary">Clique aqui</Button>;
}
```

> ℹ️ Este recurso ainda está em desenvolvimento e será disponibilizado quando o package for publicado.

---

## 📬 Contato

Na página **Contato** do projeto você pode enviar um e‑mail diretamente para o autor (eu).