## Desafio Fácil Consulta

### Descrição
Desenvolver o front-end de um cadastro multi-step e das páginas de revisão e conclusão. Salvar os dados no state na medida em que o usuário for avançando o cadastro e aplicar validação em todos os campos do formulário.

### Uso
```bash
# clonar
npx degit flavionn/facilconsulta facilconsulta
cd facilconsulta

# instalar
pnpm i

# desenvolver
pnpm dev
```

- se não tiver o pnpm instalado rode `npm install -g pnpm`
- acesso em http://localhost:3000

### Stack
- pnpm
- Vite 2
- Vue 3 (Composition API, SFC)
- Vuex
- Vue Router
- Windi CSS
- Sass
- Pug

### Comentários

#### Layouts e páginas

Utilizei o `vite-plugin-pages` para criação das rotas com base nos arquivos na pasta [pages](./src/pages). E o `vite-plugin-vue-layouts` para o [layout](./src/layouts) das páginas.

#### Gerenciamento de estado

Utilizei o `vuex` para gerencimento de estado. A estratégia foi criar um state chamado **form** com duas chaves **profissional** e **atendimento**.

Na medida em que o usuário avança no preenchimento dos formulários, os dados são salvos neste state.

#### Componentização dos formulários

Cada formulário esta em um componente próprio (Profissional e Atendimento)

Por sua vez cada um destes formulários possui componentes filhos que são os campos. Exemplo: campo-nome, campo-cpf, etc.

Em algumas situações o componente filho emite um valor para o componente pai, que por sua vez envia este valor via prop para outro filho. Exemplo: campo-estado emite o valor da UF para o componente formulário Profissional que envia esta UF via prop para o componente campo-cidade. (Lógica para popular o select cidade com base no estado).

No carregamento inicial existe uma função no componente pai para preencher os campos com algum valor inicial (caso exista no store)

Coloquei alguns comentários linha a linha no arquivo em [Form/Profissional.vue](./src/components)

#### Validação

A validação ocorre no próprio campo (no keyup, blur ou change) e também quando o usuário envia o formulário.

Criei um [módulo](./src/modules) para validar cada campo especificamente. E um outro módulo com diferentes tipos de verificação de campo. (Ex. se esta vazio, se é número, tamanho, etc)

#### Proteção das rotas

A rota 'cadastro-atendimento' só é liberada caso o cadastro profissional esta todo preenchido.
As rotas 'cadastro-revisao' e 'cadastro-conclusao' só serão liberadas caso os dois cadastros profissional e atendimento estejam preenchidos.