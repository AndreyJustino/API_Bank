// Importa o objeto `Router` do Express, que permite criar rotas de forma modular e organizada.
import { Router } from "express";

// Importa os controladores responsáveis pelas operações sobre os usuários.
// Cada um desses controladores contém a lógica para realizar as operações de CRUD (Criar, Ler, Atualizar e Deletar) em usuários.
import deleteUser from "../../controller/user/deleteUser.controller.js";
import getUser from "../../controller/user/getUser.controller.js";
import postUser from "../../controller/user/postUser.controller.js";
import putUser from "../../controller/user/putUser.controller.js";

// Cria uma instância do roteador, onde serão configuradas as rotas para as operações relacionadas aos usuários.
const routerUser = Router();

// Define uma rota HTTP GET para buscar informações sobre usuários.
// Quando uma requisição GET for feita para "/getUser", o controlador `getUser` será executado.
routerUser.get("/getUser", getUser);

// Define uma rota HTTP POST para criar um novo usuário.
// Quando uma requisição POST for feita para "/postUser", o controlador `postUser` será executado.
routerUser.post("/postUser", postUser);

// Define uma rota HTTP DELETE para deletar um usuário.
// Quando uma requisição DELETE for feita para "/deleteUser", o controlador `deleteUser` será executado.
routerUser.delete("/deleteUser", deleteUser);

// Define uma rota HTTP PUT para atualizar informações de um usuário.
// Quando uma requisição PUT for feita para "/putUser", o controlador `putUser` será executado.
routerUser.put("/putUser/:id", putUser);

// Exporta o roteador configurado para que ele possa ser usado em outros arquivos da aplicação, como na definição da API principal.
export default routerUser;
