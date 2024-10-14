import { accounts } from "../../model/model";

export default async function updateAccount(req, res) {
    try {
        const { id } = req.params;
        const { balance, type } = req.body;

        const account = await accounts.findOne({ where: { id } });

        if (!account) {
            return res.status(404).json({ message: "Conta não encontrada." });
        }

        
        if (balance !== undefined) account.balance = balance;
        if (type) account.type = type;

        await account.save();

        return res.status(200).json({ message: "Conta atualizada com sucesso.", account });
    } catch (error) {
        return res.status(500).json({ message: "Erro ao atualizar conta.", error: error.message });
    }
}