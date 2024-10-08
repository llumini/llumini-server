# POC para Salvamento e Renderização de Notas em Markdown

O objetivo desta POC é verificar se a implementação de notas em Markdown pode ser integrada ao sistema de forma eficiente, tanto no armazenamento quanto na renderização. Também vamos avaliar se a renderização no front-end pode ser melhorada com a inclusão de componentes adicionais.

### Tecnologias:

- Back-end: Nest.js
- Banco de Dados: PostgreSQL
- ZOD: Validação de Schemas de Dados

### Hipóteses:

- Algumas ferramentas de markdown conseguem salvar os dados em formato JSON, por estarmos utilizando o PostgreSQL, que possui suporte nativo a JSON, a manipulação dos dados pode ser mais eficiente.
- O JSON é formado por um conjunto de chaves e valores, onde a chave é o tipo do bloco e o valor é o conteúdo. Talvez seja necessário definir uma tipagem para os tipos de blocos suporatdos.

### Desafios:

### To-Do:

- [x] Salvar notas em formato JSON no banco de dados
- [ ] Validar os dados de entrada
- [ ] Obter as notas do banco de dados
- [ ] Obter uma nota específica
- [ ] Atualizar uma nota
- [ ] Excluir uma nota
