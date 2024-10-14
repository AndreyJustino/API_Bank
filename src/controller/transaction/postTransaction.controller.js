import { transactions, accounts } from "../../model/model.js";

async function postTransaction(req, res) {
    try {
        const { type, account_id, date_transactions, value } = req.body;

        // Verifica se todos os campos obrigatórios foram fornecidos e não são valores vazios.
        if (!type || !account_id || !date_transactions || value === undefined) {
            return res.status(400).json({ message: "Todos os campos obrigatórios devem ser preenchidos e não podem estar vazios." });
        }

        const accountExists = await accounts.findByPk(account_id);
        if (!accountExists) {
            return res.status(404).json({ message: "Conta não encontrada." });
        }

        const newTransaction = await transactions.create({
            type,
            account_id,
            date_transactions,
            value
        });

        res.status(201).json(newTransaction);

    } catch (error) {
        console.error("Error in postTransaction: ", error.message);
        res.status(500).json({ message: "Erro ao criar a transação." });
    }
}

export default postTransaction;
