# PiscinaClean Pro 💧

Website institucional moderno, altamente responsivo e otimizado para conversão de serviços de limpeza, tratamento químico e manutenção preventiva de piscinas. Desenvolvido para residências de alto padrão, condomínios prediais, hotéis e clubes de lazer.

---

## 🎨 Conceito Visual e Identidade

O design foi estruturado sob o conceito de **Clareza Cristalina (Pristine Tech)**:
- **Tipografia Premium**: Títulos chamativos em **Poppins** (sans-serif geométrica expressiva) e textos funcionais em **Inter** (alta legibilidade em interfaces).
- **Esquema de Cores Aquático**: Uso dominante de tons de azul (`#0077FF`, `#00C2FF`) combinados com fundos claros e macios (`#F7FBFF`), remetendo à transparência e frescor de uma piscina tratada.
- **Micro-interações de Elite**: Uso de animações fluidas baseadas em física de molas (framer motion) para transições, rolagem suave personalizada, e elementos flutuantes de feedback.
- **Glassmorphism Integrado**: Menus e cartões utilizando filtros de desfoque (`backdrop-blur`) e bordas translúcidas de alto contraste.

---

## 🚀 Tecnologias Utilizadas

Para garantir a compatibilidade, portabilidade e performance máxima no ambiente React/Vite:
1. **React 19 & TypeScript**: Componentização modular, controle estrito de tipos e gerenciamento de estado previsível.
2. **Tailwind CSS v4**: Classes utilitárias limpas para design responsivo fluido (Desktop-First Precision & Mobile-First Code).
3. **Motion (Framer Motion v12)**: Responsável pelas animações de carregamento (Preloader), abertura de menus móveis, expansão de cartões e carrosséis.
4. **Lucide Icons**: Iconografia de alta definição e estilo consistente.

---

## 📦 Estrutura de Seções e Funcionalidades

O site é uma **Single Page Application (SPA)** composta pelas seguintes divisões:

1. **Preloader Splash Screen**: Tela de carregamento com transição de fade-out e anel de pulsação aquática.
2. **Sticky Glass Header**: Menu de navegação superior que transiciona de transparente para desfoque de vidro ao rolar. Contém indicador dinâmico de progresso de leitura no topo.
3. **Hero Banner**: Slider automático de imagens em alta definição, títulos persuasivos com gradientes e cartões de estatísticas animadas com conquistas reais.
4. **Sobre a Empresa**: História corporativa de 10 anos acompanhada de um seletor interativo de pilares (Missão, Visão e Valores) e grid de especialistas operacionais certificados.
5. **Serviços de Elite (Grid 2x4)**: Cartões interativos para 8 serviços cruciais. Ao clicar, abre-se um painel de detalhamento (Modal) com cronogramas e escopos técnicos detalhados.
6. **Como Trabalhamos (Timeline)**: Linha do tempo dinâmica adaptável (horizontal no desktop, empilhamento vertical no mobile) ilustrando as 4 fases do fluxo de atendimento.
7. **Diferenciais**: Grade de vantagens exclusivas do cliente PiscinaClean, acompanhado de um banner promocional para requisição de relatórios técnicos em PDF.
8. **Galeria Interativa (Masonry & Comparador)**:
   - **Before/After Comparison Slider**: Controle deslizante interativo por toque/arraste para ver piscinas verdes mudando para azul cristalino em tempo real usando filtros CSS precisos.
   - **Showcase Filtrável**: Galeria de pastilhas, análises digitais e iluminação com suporte a Lightbox imersivo ao clicar.
9. **Depoimentos**: Carrossel auto-rotativo com avaliações 5 estrelas e depoimentos de moradores e síndicos.
10. **Perguntas Frequentes (FAQ Accordion)**: Acordeões expansivos com molas físicas para sanar as principais objeções de contratação.
11. **Formulário de Contato com Validação**: Filtros de validação instantânea para e-mail e telefone, incluindo seletor de tamanho/tipo de piscina e tela de envio concluído com protocolo único.
12. **Mapa e Canais de Contato**: Telefone, e-mail comercial, horários e redes sociais integrados a um mapa de geolocalização responsivo do Google Maps.

---

## 🛠️ Como Executar e Compilar o Projeto

Este projeto utiliza o bundler moderno **Vite** para empacotamento rápido e sem atrito.

### Passos de Execução Local:

1. **Instalar Dependências**:
   ```bash
   npm install
   ```
2. **Iniciar Servidor de Desenvolvimento**:
   ```bash
   npm run dev
   ```
   *O servidor iniciará automaticamente na porta default recomendada `3000`.*

3. **Compilar para Produção (Build)**:
   ```bash
   npm run build
   ```
   *A compilação otimizada de arquivos estáticos minificados será gerada no diretório `/dist`.*

4. **Executar Linter**:
   ```bash
   npm run lint
   ```
