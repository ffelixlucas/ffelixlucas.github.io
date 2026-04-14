# Portfólio de Lucas

Portfólio/landing page com visual autoral (tipografia forte + fundo “paper/ink”), foco em legibilidade, performance e narrativa de projetos. É um site estático para GitHub Pages.

## Visualização Online

Você pode visualizar a página diretamente em: [https://ffelixlucas.github.io/](https://ffelixlucas.github.io/)
## Índice

- [Características](#características)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação e Uso](#instalação-e-uso)
- [Customizações](#customizações)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Contato](#contato)

## Características

- **Design autoral & responsivo:** Grid/Flex, tipografia com Google Fonts e layout consistente em mobile/desktop.
- **Acessibilidade:** skip link, semântica, `aria-*`, foco visível.
- **Menu móvel:** overlay com trava de scroll.
- **Animações leves:** reveal com `IntersectionObserver` (respeita `prefers-reduced-motion`).
- **Contato honesto:** o formulário gera um `mailto:` no seu app de e-mail (não “envia fake”).
- **Sem dependências de animação:** sem ScrollReveal/Typed/SweetAlert; só HTML/CSS/JS.

## Tecnologias Utilizadas

- **HTML5:** Estrutura semântica e otimizada para SEO e acessibilidade.
- **CSS3:** Variáveis, Grid/Flex, responsividade, fundo com gradientes/textura.
- **JavaScript:** Menu, seção ativa, reveal, botão “voltar ao topo”, copiar contato e geração de e-mail.
- **Font Awesome:** Ícones vetoriais para melhor representação visual.
- **Google Fonts:** Tipografia do site.

## Estrutura do Projeto

```bash
landing-page/
├── assets/
│   ├── img/                # Imagens da landing page (ex.: fotolinkedin.jpg, pixelart.png, favicon.ico, etc.)
├── index.html              # Arquivo HTML principal com a estrutura da página
├── style.css               # Arquivo de estilos com variáveis, layout e responsividade
├── script.js               # Arquivo com scripts para interações e animações
└── README.md               # Este arquivo de documentação
```

## Instalação e Uso

1. **Clone o repositório:**

   ```bash
   git clone https://seu-repositorio.com/landing-page.git
   cd landing-page
   ```

2. **Abra o arquivo `index.html` em seu navegador:**

   - Dê um duplo clique no arquivo ou utilize um servidor local (por exemplo, com a extensão Live Server do VS Code) para uma experiência ideal.

## Customizações

- **Conteúdo:** Atualize textos e links no `index.html`.
- **Estilos:** Ajuste as variáveis CSS no topo do `style.css` (cores, fontes e sombras).
- **Projetos:** Edite a seção `#projects` para adicionar/remover cards e tags.
- **Contato:** O e-mail destino do formulário fica em `script.js` (procure por `lucas.fafx@gmail.com`).

## Contribuição

Contribuições, sugestões e feedback são muito bem-vindos! Se tiver ideias para melhorias ou encontrar algum bug, sinta-se à vontade para abrir uma _issue_ ou enviar um _pull request_ no repositório.

## Licença

Distribuído sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais informações.

## Contato

- **Email:** [lucas.fafx@gmail.com](mailto:lucas.fafx@gmail.com)
- **LinkedIn:** [linkedin.com/in/lucasfanhafelix](https://linkedin.com/in/lucasfanhafelix)
- **GitHub:** [github.com/ffelixlucas](https://github.com/ffelixlucas)

---
