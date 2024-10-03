// Importa o objeto `Router` do Express, que é usado para criar rotas de maneira modular.
import { Router } from "express";

// Importa os controladores relacionados às transações (transactions).
// Cada um desses controladores contém a lógica para lidar com requisições específicas de transações, como buscar, criar, deletar e atualizar.
import deleteTransaction from "../../controller/transaction/deleteTransaction.controller.js";
import getTransaction from "../../controller/transaction/getTransaction.controller.js";
import postTransaction from "../../controller/transaction/postTransaction.controller.js";
import putTransaction from "../../controller/transaction/putTransaction.controller.js";

// Cria uma nova instância do roteador do Express, onde serão definidas as rotas para as operações relacionadas às transações.
const routerTransaction = Router();

// Define uma rota HTTP GET para buscar transações.
// Quando uma requisição GET é feita para "/getTransaction", o controlador `getTransaction` será executado.
routerTransaction.get("/getTransaction", getTransaction);

// Define uma rota HTTP POST para criar uma nova transação.
// Quando uma requisição POST é feita para "/postTransaction", o controlador `postTransaction` será executado.
routerTransaction.post("/postTransaction", postTransaction);

// Define uma rota HTTP DELETE para deletar uma transação.
// Quando uma requisição DELETE é feita para "/deleteTransaction", o controlador `deleteTransaction` será executado.
routerTransaction.delete("/deleteTransaction", deleteTransaction);

// Define uma rota HTTP PUT para atualizar uma transação.
// Quando uma requisição PUT é feita para "/putTransaction", o controlador `putTransaction` será executado.
routerTransaction.put("/putTransaction", putTransaction);

// Exporta o roteador configurado para que ele possa ser utilizado em outros lugares da aplicação, como no arquivo principal da API.
export default routerTransaction;
