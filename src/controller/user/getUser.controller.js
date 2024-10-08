import { user } from "../../model/model.js";

async function getUser(req, res) {
    try {
        // Obtém o email ou ID dos parâmetros da requisição (req.params)
        const { id, email } = req.body;
         
        // Verifica se o email ou ID foi fornecido
        if (!id && !email) {
            return res.status(400).json({
                message: "ID ou Email do usuário é necessário.",
                status: 400
            });
        }

        // Busca o usuário no banco de dados pelo ID ou email
        const userInput = await user.findOne({
            where: id ? { id } : { email }
        });

        // Se o usuário for encontrado, retorna os dados do usuário
        if (userInput) {
            return res.status(200).json({
                message: "Usuário encontrado.",
                user: userInput,
                status: 200
            });
        } else {
            // Se o usuário não for encontrado, retorna um erro 404
            return res.status(404).json({
                message: "Usuário não encontrado.",
                status: 404
            });
        }

    } catch (error) {
        // Captura qualquer erro que ocorrer e retorna um status 500
        return res.status(500).json({
            message: "Erro ao obter o usuário.",
            erro: error.message,
            status: 500
        });
    }
}


export default getUser;
