
# Silveira Construcciones

Site institucional e comercial desenvolvido para a **Silveira Construcciones**, empresa de construção e reformas residenciais no Uruguai.

O projeto apresenta serviços, obras reais executadas pela empresa e canais de contato, com foco em uma experiência responsiva, navegação acessível e apresentação profissional dos trabalhos.

**Site publicado:** https://silveiraconstrucciones.com

## Tecnologias utilizadas

- **HTML5:** estrutura semântica e organização do conteúdo.
- **CSS3:** estilos responsivos, Flexbox, variáveis CSS, transições e componentes visuais.
- **JavaScript (ES6+):** interatividade, manipulação do DOM e módulos nativos.
- **Git e GitHub:** versionamento e acompanhamento do desenvolvimento.
- **Google Fonts:** tipografia Manrope.

O projeto foi desenvolvido sem frameworks JavaScript e não exige processo de compilação.

## Funcionalidades implementadas

### Navegação e interface

- Layout adaptável para dispositivos móveis, tablets e desktops.
- Menu responsivo com controle de abertura e fechamento.
- Cabeçalho com comportamento visual ajustado durante a rolagem.
- Navegação entre páginas e seções do site.
- Estados de foco visíveis e suporte à navegação por teclado.
- Considerações de acessibilidade, incluindo atributos ARIA e preferência por movimento reduzido.

### Apresentação dos projetos

- Galeria de fotografias de obras reais da empresa.
- Projetos destacados na página inicial.
- Página dedicada à apresentação dos projetos.
- Galeria interativa com navegação entre fotografias.
- Controles por teclado e gestos de toque em dispositivos compatíveis.
- Contador de imagens e pré-carregamento de fotografias adjacentes.
- Dados dos projetos organizados separadamente da lógica de apresentação.

### Contato comercial

- Página de contato com informações para consultas.
- Formulário para preparar uma mensagem personalizada.
- Integração com WhatsApp por meio de URL com texto codificado.
- Links para os canais oficiais da empresa.

O formulário não utiliza banco de dados nem armazena as informações enviadas em um servidor próprio.

## Estrutura do projeto

- `index.html` — página inicial, apresentação da empresa, projetos destacados e outras seções institucionais.
- `proyectos/index.html` — apresentação dos projetos e galeria interativa.
- `servicios/index.html` — informações sobre os serviços oferecidos.
- `contacto/index.html` — canais de contato e formulário integrado ao WhatsApp.
- `css/style.css` — estilos globais, componentes e regras responsivas.
- `js/script.js` — navegação, comportamento do cabeçalho e formulário de contato.
- `js/projects.js` — renderização dos projetos e lógica da galeria.
- `js/projects-data.js` — dados e referências das fotografias dos projetos.
- `images/` — recursos gráficos e fotografias utilizados no site.

A seção institucional *Nosotros* está integrada à página inicial.

## Organização e decisões técnicas

O desenvolvimento foi realizado de forma incremental, com versionamento por Git.

Entre as decisões adotadas estão:

- Separação entre estrutura HTML, apresentação CSS e comportamento JavaScript.
- Reutilização dos estilos e componentes nas diferentes páginas.
- Utilização de módulos JavaScript nativos para organizar a galeria de projetos.
- Uso de caminhos relativos para navegação e carregamento de recursos.
- Estrutura semântica e cuidados com acessibilidade.
- Interface adaptável a diferentes tamanhos de tela.
- Utilização de fotografias de trabalhos reais da empresa.

O conteúdo público do site está em espanhol, enquanto identificadores internos do código utilizam principalmente inglês.

## Executando localmente

O projeto é um site estático e não necessita de instalação de dependências JavaScript.

1. Clone ou baixe o repositório.
2. Abra a pasta do projeto no editor de sua preferência.
3. Inicie um servidor HTTP local, como o Live Server do VS Code.
4. Acesse a página inicial pelo navegador.

Recomenda-se executar o projeto por um servidor local, pois os módulos JavaScript podem apresentar restrições quando os arquivos são abertos diretamente pelo protocolo `file://`.

## Projeto profissional

Este site foi desenvolvido por **Giovanni Silveira** para a Silveira Construcciones, como projeto real de desenvolvimento web front-end.

**Desenvolvedor:** [Giovanni Silveira](https://github.com/DevGiovanni-Code)

**Site oficial:** https://silveiraconstrucciones.com

As fotografias documentam projetos reais executados pela Silveira Construcciones e pertencem à empresa. Sua utilização neste repositório está vinculada à apresentação deste projeto, não implicando autorização para reutilização por terceiros.
