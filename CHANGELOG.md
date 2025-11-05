# Changelog
Todas as mudanças notáveis neste projeto serão documentadas aqui.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere a [Semantic Versioning](https://semver.org/lang/pt-BR/).

## [0.6.2] - 2025-11-05

### 🐛 Bug Fixes
- Corrigida a exportação de estilos globais:
  - `@gothd/kit-componentes/styles.css` agora contém apenas os estilos React essenciais.
  - `@gothd/kit-componentes/styles/index.css` passa a refletir corretamente o tema base completo do Tailwind.
- Pacote WC agora também distribui `index.css` com todas as classes do Tailwind, permitindo uso de utilitários sem configuração adicional.

## [0.6.1] - 2025-11-05
### ✨ Novidades

- Web Components agora disponíveis como bundles individuais (`kc-button.js`, `kc-card.js`, etc.)
- Todos os bundles (globais e individuais) registram os componentes em `window.KitComponentes`
- Deploy preserva versões anteriores no GitHub Pages (`wc/{version}/` e `wc/latest/`)
- Atualização no README com instruções claras para consumo via Web Components

### 🛠️ Infraestrutura

- Workflow de deploy ajustado para clonar e preservar o histórico do branch `gh-pages`
- Testes manuais validados com `0.6.1-dev` antes do release oficial

## [0.6.0] - 2025-11-05
### ✨ Novidades

- Novo bundle global `kit-componentes.js` substitui `kit-componentes-wc.js`
- Cada Web Component agora é distribuído também como bundle individual (`kc-button.js`, `kc-card.js`, etc.)
- Estilos otimizados por componente, reduzindo o tamanho e escopo de cada bundle

## [0.5.0] - 2025-11-04
### Added

- Workflow de deploy com GitHub Actions para publicar os Web Components no GitHub Pages.
- Distribuição versionada em `/wc/{versão}/` e alias `/wc/latest/`.

## [0.4.0] - 2025-10-30
### Added

- Inclusão de `reset.css` em cada Web Component.
- Estilos aplicados corretamente aos slots.
