import { user } from "../../model/model.js";

async function getUser(req, res) {
    try {
        // Obtém o email do parâmetro da requisição (req.params)
        const { email } = req.params;
         
        // Verifica se o email foi fornecido
        if (!email) {
            return res.status(400).json({
                message: "Email do usuário é necessário.",
                status: 400
            });
        }

        // Busca o usuário no banco de dados pelo email
        const userInput = await user.findOne({
            where: {
                email: email
            }
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
