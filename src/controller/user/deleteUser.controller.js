import { user } from "../../model/model.js";
import bcrypt from "bcrypt";

async function deleteUser(req, res) {
    try {
        const userInput = req.body;

        if (!userInput.email || !userInput.password) {
            return res.status(400).json({
                message: "Preencha todos os campos.",
                status: 400
            });
        }

        const userDB = await user.findOne({
            where: {
                email: userInput.email,
            }
        });

        if (!userDB) {
            return res.status(404).json({
                message: "Usuário não encontrado.",
                status: 404
            });
        }

        const validarPassword = await bcrypt.compare(userInput.password, userDB.password);

        if (!validarPassword) {
            return res.status(401).json({
                message: "Senha incorreta.",
                status: 401
            });
        }

        await user.destroy({
            where: {
                email: userInput.email
            }
        });

        return res.status(200).json({
            message: "Usuário deletado com sucesso.",
            status: 200
        });

    } catch (error) {
        console.error("Error in deleteUser: ", error.message);
        return res.status(500).json({
            message: "Erro ao deletar usuário.",
            erro: error.message,
            status: 500
        });
    }
}


export default deleteUser;
