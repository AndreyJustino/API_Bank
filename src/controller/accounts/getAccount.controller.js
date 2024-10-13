import { accounts } from "../../model/model.js";

export default async function getAccount(req, res) {
    try {
        const { account_id } = req.params;

        
        if (!account_id) {
            return res.status(400).json({ message: "ID da conta é obrigatório." });
        }

        
        const account = await accounts.findOne({ where: { id: account_id } });

        
        if (!account) {
            return res.status(404).json({ message: "Conta não encontrada." });
        }

        return res.status(200).json({ message: "Conta encontrada.", account });
    } catch (error) {
        return res.status(500).json({ message: "Erro ao buscar conta.", error: error.message });
    }
}
