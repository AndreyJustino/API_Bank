import { accounts } from "../../model/model.js";
import { user } from "../../model/model.js";

export default async function createAccount(req, res) {
    try {
        const { user_id, type, balance } = req.body;

        // Verifica se todos os campos obrigatórios foram preenchidos
        if (!user_id || !type || balance === undefined) {
            return res.status(400).json({ message: "Preencha todos os campos obrigatórios." });
        }

        // Verifica se o usuário existe
        const userExists = await user.findOne({ where: { id: user_id } });
        if (!userExists) {
            return res.status(404).json({ message: "Usuário não encontrado." });
        }

        const newAccount = await accounts.create({
            user_id,
            type,
            balance
        });

        return res.status(201).json({ message: "Conta criada com sucesso.", account: newAccount });
    } catch (error) {
        return res.status(500).json({ message: "Erro ao criar conta.", error: error.message });
    }
}
