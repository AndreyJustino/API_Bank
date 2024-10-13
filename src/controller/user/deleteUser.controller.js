import { user } from "../../model/model.js";
import bcrypt from "bcrypt";

// Define a função assíncrona `deleteUser`, que será usada para deletar um usuário existente.
async function deleteUser(req, res) {
    try {
        const userInput = req.body;

        // Verifica se todos os campos obrigatórios foram preenchidos (email e senha).
        if (!userInput.email || !userInput.password) {
            return res.status(400).json({
                message: "Preencha todos os campos.",
                status: 400
            });
        }

        // Busca o usuário no banco de dados pelo email.
        const userDB = await user.findOne({
            where: {
                email: userInput.email,
            }
        });

        // Verifica se o usuário foi encontrado.
        if (!userDB) {
            return res.status(404).json({
                message: "Usuário não encontrado.",
                status: 404
            });
        }

        // Compara a senha fornecida com a senha criptografada no banco de dados.
        const validarPassword = await bcrypt.compare(userInput.password, userDB.password);

        if (!validarPassword) {
            // Se a senha estiver incorreta, retorna uma resposta de erro.
            return res.status(401).json({
                message: "Senha incorreta.",
                status: 401
            });
        }

        // Deleta o usuário no banco de dados se a senha for válida.
        await user.destroy({
            where: {
                email: userInput.email
            }
        });

        // Retorna uma resposta de sucesso após deletar o usuário.
        return res.status(200).json({
            message: "Usuário deletado com sucesso.",
            status: 200
        });

    } catch (error) {
        // Captura e trata qualquer erro que ocorra durante a execução.
        console.error("Error in deleteUser: ", error.message);
        return res.status(500).json({
            message: "Erro ao deletar usuário.",
            erro: error.message,
            status: 500
        });
    }
}


export default deleteUser;
