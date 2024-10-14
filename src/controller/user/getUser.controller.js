import { user } from "../../model/model.js";

async function getUser(req, res) {
    try {
        const { email } = req.params;
         
        if (!email) {
            return res.status(400).json({
                message: "Email do usuário é necessário.",
                status: 400
            });
        }

        const userInput = await user.findOne({
            where: {
                email: email
            }
        });

        if (userInput) {
            return res.status(200).json({
                message: "Usuário encontrado.",
                user: userInput,
                status: 200
            });
        } else {
            return res.status(404).json({
                message: "Usuário não encontrado.",
                status: 404
            });
        }

    } catch (error) {
        return res.status(500).json({
            message: "Erro ao obter o usuário.",
            erro: error.message,
            status: 500
        });
    }
}


export default getUser;
