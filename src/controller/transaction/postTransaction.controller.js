import { transactions } from "../../model/model.js";

async function postTransaction(req, res) {
    try {
        // Extraindo os dados da transação do corpo da requisição
        const { type, accountId } = req.body;

        // Verifica se todos os campos obrigatórios foram fornecidos e não são valores vazios.
        if (!type || !accountId || accountId.trim() === "") {
            return res.status(400).json({ message: "Todos os campos obrigatórios devem ser preenchidos e não podem estar vazios." });
        }

        // Cria uma nova transação no banco de dados
        const newTransaction = await transactions.create({
            type,
            accountId
        });

        // Retorna a nova transação criada
        res.status(201).json(newTransaction);

    } catch (error) {
        // Log do erro no servidor
        console.error("Error in postTransaction: ", error.message);

        // Retorna uma resposta de erro 500 indicando problema no servidor
        res.status(500).json({ message: "Erro ao criar a transação." });
    }
}

export default postTransaction;
