# 👻 Kit Componentes

![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4.1-0f172a?style=for-the-badge&logo=tailwindcss&logoColor=white)

Um kit de componentes e templates modernos, construído com **React + Vite + React Router** e estilizado com **Tailwind CSS v4.1**.  
O objetivo é oferecer uma base elegante, confiável e fácil de expandir para portfólios, e‑commerce e landing pages.

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

---

## 🚀 Deploy

O projeto está configurado para deploy no GitHub Pages com vite build + gh-pages.

Acesse em:

```
https://SEU_USUARIO.github.io/kit-componentes/
```