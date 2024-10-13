import { accounts } from "../../model/model.js";

export default async function deleteAccount(req, res) {
    try {
        const { userId } = req.params;

        
        if (!userId) {
            return res.status(400).json({ message: "ID da conta é obrigatório." });
        }

        
        const account = await accounts.findOne({ where: { user_id: userId } });

       
        if (!account) {
            return res.status(404).json({ message: "Conta não encontrada." });
        }

        
        await accounts.destroy({ where: { user_id: userId } });

        return res.status(200).json({ message: "Conta excluída com sucesso." });
    } catch (error) {
        return res.status(500).json({ message: "Erro ao excluir conta.", error: error.message });
    }
}
