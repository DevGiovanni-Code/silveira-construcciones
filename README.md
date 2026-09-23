# Silveira Construcciones

Base do site institucional e comercial multipágina da Silveira Construcciones, organizada em HTML, CSS e JavaScript. Nesta etapa, as cinco páginas contêm apenas HTML5 mínimo, sem conteúdo no corpo, seções, layout ou interações implementadas.

O CSS inclui um reset básico e variáveis para cores, espaçamentos, largura máxima do conteúdo e transições. A identidade visual combina preto/grafite, cinza, branco e dourado discreto.

## Estrutura de arquivos

```text
silveira-construcciones/
├── index.html
├── proyectos/
│   └── index.html
├── servicios/
│   └── index.html
├── nosotros/
│   └── index.html
├── contacto/
│   └── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   ├── hero/
│   ├── projects/
│   ├── services/
│   ├── about/
│   └── instagram/
└── README.md
```

As pastas de imagens estão vazias, reservadas para fotografias reais dos trabalhos da empresa.

## Finalidade das páginas

- **Inicio (`index.html`):** página comercial principal. Futuramente reunirá hero, prova de projetos reais, projetos destacados, antes e depois, resumo de serviços, apresentação de Nicolás Silveira, Instagram, processo de trabalho, clientes/depoimentos e chamada para orçamento.
- **Proyectos (`proyectos/index.html`):** galeria completa de trabalhos reais. Não haverá páginas individuais de projetos; filtros por categoria e modal/lightbox poderão ser desenvolvidos posteriormente.
- **Servicios (`servicios/index.html`):** apresentação detalhada e comercial dos serviços.
- **Nosotros (`nosotros/index.html`):** apresentação da empresa, de Nicolás Silveira, da forma de trabalho e do posicionamento.
- **Contacto (`contacto/index.html`):** solicitação de orçamento, formulário, WhatsApp e demais meios de contato.

Essas funcionalidades são previstas para etapas futuras e ainda não estão implementadas.

## Arquivos compartilhados e testes locais

Todas as páginas utilizam o mesmo `css/style.css` e `js/script.js`. A página inicial usa os caminhos `css/style.css` e `js/script.js`; as páginas nas subpastas usam `../css/style.css` e `../js/script.js`. O JavaScript é carregado com `defer`.

Os caminhos relativos permitem abrir diretamente cada `index.html` no navegador ou testar o projeto por um servidor local, preservando a estrutura de pastas. As páginas aparecerão vazias nesta etapa.

Para publicar, envie o conteúdo completo desta pasta para uma hospedagem estática que sirva `index.html` como documento padrão dos diretórios. Assim, as páginas internas poderão ser acessadas por `/proyectos/`, `/servicios/`, `/nosotros/` e `/contacto/` quando o site estiver na raiz do domínio. Não é necessário um processo de compilação.

## Convenções do projeto

- Conteúdo visível e comentários organizacionais em espanhol.
- Classes, variáveis, funções e nomes internos em inglês. As pastas das páginas usam os nomes em espanhol definidos na arquitetura para as URLs públicas.
- Fotografias e informações reais, sem inventar projetos, clientes, números ou depoimentos.
- Desenvolvimento incremental: HTML e revisão estrutural, CSS e revisão responsiva, JavaScript necessário, testes e refinamentos.
- Alterações limitadas à tarefa solicitada, preservando as partes aprovadas e sem avançar automaticamente para a próxima etapa.

O CSS e o JavaScript existentes foram preservados nesta refatoração, incluindo as variáveis CSS.
