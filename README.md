# Controle-de-Moradores : Sistema de Gestão de Residentes e Veículo

Este projeto implementa um sistema simples de gerenciamento de residentes e veículos. Ele permite adicionar, editar, excluir e visualizar informações sobre residentes e seus veículos associados. As interações acontecem por meio de modais para entrada de dados e de uma tabela que exibe as informações dos residentes.

## Funcionalidades

1. **Gerenciamento de Residentes**:
   - Adicionar novos residentes com informações como nome, data de nascimento, CPF, bloco e apartamento.
   - Editar os dados de residentes existentes.
   - Excluir residentes após confirmação de exclusão.
   - Visualizar informações detalhadas dos residentes.

2. **Gerenciamento de Veículos**:
   - Associar veículos a residentes com informações como placa, ano de fabricação e marca do veículo.
   - Adicionar novos veículos para os residentes.

3. **Validação de Dados**:
   - Validação dos campos obrigatórios antes de adicionar ou editar um residente, com destaque visual em campos inválidos.
   - Verificação de CPF (futuramente será implementada a função `validCPF()`).

4. **Modais**:
   - Modais de entrada para adicionar e editar residentes e veículos.
   - Modais para confirmação de exclusão de residentes.

5. **Busca de Residentes**:
   - Funcionalidade de busca na tabela de residentes com base no nome, que filtra os dados em tempo real à medida que o usuário digita.

6. **Integração com Backend (API)**:
   - As ações de adicionar, editar, excluir e listar residentes são realizadas com chamadas para a API backend.
   - As ações de adição e edição de veículos também interagem com a API para associar veículos aos residentes.

## Descrição das Funções

### `cleanModal()`
Limpa os valores dos campos no modal de residentes e remove as bordas vermelhas de campos inválidos.

### `cleanModalVeiculo()`
Limpa os valores dos campos no modal de veículos.

### `closeModal()`
Fecha o modal de residentes e limpa os campos de entrada.

### `sendData()`
Envia os dados de um novo residente para a API, após a validação dos campos.

### `isValid()`
Valida os campos do formulário de residente. Retorna `true` se todos os campos obrigatórios estiverem preenchidos, e `false` caso contrário.

### `creatTable(listResidents)`
Cria e exibe a tabela de residentes com base nos dados fornecidos. Permite também acionar a edição ou visualização dos residentes.

### `confirmDeleteMensagem()`
Prepara a mensagem de confirmação para a exclusão de um residente.

### `infoRecidents(residentId)`
Exibe as informações detalhadas de um residente no modal de informações.

### `deleteResident()`
Exclui um residente da API.

### `updateResidents(residentUpdate)`
Atualiza os dados de um residente na API.

### `CreatUpdateResidents()`
Cria um objeto com os dados atualizados de um residente e chama a função `updateResidents` para atualizar a API.

### `editRecidents(residentId)`
Preenche os campos do modal de edição com as informações do residente selecionado.

### `closeModalUpdate()`
Fecha o modal de edição de residente.

### `closeModaldelete()`
Fecha o modal de confirmação de exclusão de residente.

### `closeModalVeiculo()`
Fecha o modal de cadastro de veículo.

### `creatSelect()`
Preenche o dropdown de marcas de veículos com opções predefinidas.

### `getResidents()`
Faz uma requisição `GET` para a API e busca todos os residentes. Exibe os dados em uma tabela.

### `postResident(resident)`
Envia os dados de um novo residente para a API.

### `addVeiculos()`
Adiciona um veículo associado a um residente, e os dados são salvos na lista local de veículos.

### `searchResidents()`
Permite a busca de residentes por nome na tabela de residentes, com atualização em tempo real à medida que o usuário digita.

## Como Usar

1. **Visualizar Residentes**:
   - A lista de residentes será carregada automaticamente ao iniciar o sistema.

2. **Adicionar um Residente**:
   - Clique no botão de adicionar residente e preencha o formulário com as informações do residente.
   - O sistema irá validar os dados e enviar a solicitação de adição para a API.

3. **Editar um Residente**:
   - Clique no ícone de edição ao lado de um residente para editar suas informações. Depois, clique no botão de salvar para atualizar os dados.

4. **Excluir um Residente**:
   - Clique no ícone de exclusão ao lado de um residente. Uma mensagem de confirmação será exibida antes de excluir o residente.

5. **Associar um Veículo a um Residente**:
   - Clique no ícone de adicionar veículo para um residente e preencha o formulário com as informações do veículo.

6. **Busca**:
   - Utilize o campo de busca para filtrar os residentes por nome na tabela.

## Tecnologias Usadas

- **HTML**: Estrutura da página, incluindo os modais e a tabela de residentes.
- **CSS**: Estilização e layout da página (não incluído no código fornecido).
- **JavaScript**: Implementação da lógica de gerenciamento de residentes e veículos.
- **Bootstrap**: Utilizado para os modais e outros componentes de interface.
- **jQuery**: Manipulação de eventos e elementos da interface, como a busca na tabela.
- **AJAX**: Realiza requisições assíncronas à API para adicionar, editar, excluir e listar residentes e veículos.

## Requisitos

- **API Backend**: O código interage com uma API backend que deve estar em execução para que as funcionalidades de CRUD (Create, Read, Update, Delete) funcionem corretamente.

## Como Rodar

1. Certifique-se de que a API backend esteja em execução.
2. Abra o arquivo `index.html` em um navegador.
3. Interaja com o sistema de gerenciamento de residentes e veículos por meio da interface.

## Licença

Este projeto é de código aberto, sinta-se à vontade para usar, modificar ou contribuir.
