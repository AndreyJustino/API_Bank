# Back-end do Projeto Banco Inspirado no Banco Inter

Este repositório contém o back-end de um banco digital inspirado no Banco Inter, desenvolvido como parte do curso **Programadores do Amanhã**. O objetivo do back-end é fornecer a infraestrutura necessária para as funcionalidades do banco digital, como login de usuários, transações via PIX e gerenciamento de contas.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express**: Framework para construção de APIs RESTful.
- **SQLite**: Banco de dados SQL leve para armazenar informações.
- **Sequelize**: ORM para facilitar a comunicação entre o Node.js e o banco de dados SQLite.

## Estrutura do Projeto

O back-end é dividido em três conjuntos principais de rotas, cada uma com suas próprias operações de CRUD (Create, Read, Update, Delete):

- **Usuários** (`/users`)
- **Transações** (`/transactions`)
- **Contas** (`/accounts`)

### Rotas de Usuários

Essas rotas gerenciam o cadastro, autenticação e manipulação de informações dos usuários.

- `GET /getUser`: Retorna informações sobre um usuário.
- `POST /postUser`: Cria um novo usuário.
- `DELETE /deleteUser`: Deleta um usuário.
- `PUT /putUser`: Atualiza informações de um usuário.

### Rotas de Transações

Essas rotas permitem gerenciar transações financeiras como o envio de PIX.

- `GET /getTransaction`: Retorna informações sobre uma transação.
- `POST /postTransaction`: Cria uma nova transação.
- `DELETE /deleteTransaction`: Deleta uma transação.
- `PUT /putTransaction`: Atualiza informações de uma transação.

### Rotas de Contas

Essas rotas lidam com o gerenciamento de contas dos usuários.

- `GET /getAccounts`: Retorna informações sobre uma conta.
- `POST /postAccounts`: Cria uma nova conta.
- `DELETE /deleteAccounts`: Deleta uma conta.
- `PUT /putAccount`: Atualiza informações de uma conta.

## Como Rodar o Projeto

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. **Instale as dependências**:

    ```bash
    npm install
    ```

3. **Inicie o servidor**:

   ```bash
   node server.js
   ```

4. **Acesse o endpoint**:

   ```bash
   http://localhost:3000/
   ```

## Estrutura de Pastas

```bash
src/
│
├── controller/
│   ├── user/           # Controladores relacionados aos usuários
│   ├── transaction/    # Controladores relacionados às transações
│   └── accounts/       # Controladores relacionados às contas
│
├── routes/
│   ├── user/user.routes.js  # Rotas para usuários
│   ├── transaction/transaction.routes.js  # Rotas para transações
│   └── accounts/accounts.routes.js     # Rotas para contas
│
├── app.js              # Configuração principal do servidor
└── server.js           # Inicializar o servidor
```
