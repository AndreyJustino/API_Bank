// Importa o objeto `Router` do Express, que é usado para criar um novo conjunto de rotas de maneira modular.
import { Router } from "express";

// Importa os controladores para manipulação de contas (accounts).
// Cada um desses arquivos contém a lógica necessária para lidar com requisições específicas de contas, como buscar, criar, deletar e atualizar contas.
import getAccounts from "../../controller/accounts/getAccount.controller.js";
import postAccounts from "../../controller/accounts/postAccount.controller.js";
import deleteAccounts from "../../controller/accounts/deleteAccount.controller.js";
import putAccount from "../../controller/accounts/putAccount.controller.js";

// Cria uma nova instância do roteador do Express, onde serão definidas as rotas para as operações relacionadas às contas.
const routerAccounts = Router();

// Define uma rota HTTP GET para buscar contas.
// Quando uma requisição GET é feita para "/getAccounts", o controlador `getAccounts` será executado.
routerAccounts.get("/getAccounts", getAccounts);

// Define uma rota HTTP POST para criar uma nova conta.
// Quando uma requisição POST é feita para "/postAccounts", o controlador `postAccounts` será executado.
routerAccounts.post("/postAccounts", postAccounts);

// Define uma rota HTTP DELETE para deletar uma conta.
// Quando uma requisição DELETE é feita para "/deleteAccounts", o controlador `deleteAccounts` será executado.
routerAccounts.delete("/deleteAccounts/:userId", deleteAccounts);

// Define uma rota HTTP PUT para atualizar uma conta.
// Quando uma requisição PUT é feita para "/putAccount", o controlador `putAccount` será executado.
routerAccounts.put("/putAccount", putAccount);

// Exporta o roteador configurado para que ele possa ser utilizado em outros lugares da aplicação, como no arquivo principal da API.
export default routerAccounts;
