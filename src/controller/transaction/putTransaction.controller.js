import { transactions } from "../../model/model.js";

async function putTransaction(req, res) {
    try {
        // O ID da transação a ser atualizada será extraído dos parâmetros da requisição (req.params).
        const { id } = req.params;

        // Os dados atualizados da transação serão extraídos do corpo da requisição (req.body).
        const { amount, type, description, accountId } = req.body;

        // Verifica se o ID da transação e todos os campos obrigatórios foram fornecidos.
        if (!id || !amount || !type || !accountId) {
            return res.status(400).json({ message: "Todos os campos obrigatórios, incluindo o ID, devem ser preenchidos." });
        }

        // Encontra a transação no banco de dados e atualiza os campos com os novos valores.
        const updatedTransaction = await transactions.update(
            { amount, type, description, accountId }, // Dados a serem atualizados
            { where: { id } } // Condição de atualização (transação com o ID fornecido)
        );

        // Verifica se alguma transação foi encontrada e atualizada.
        if (!updatedTransaction[0]) {
            return res.status(404).json({ message: "Transação não encontrada." });
        }

        // Retorna uma resposta de sucesso ao cliente indicando que a transação foi atualizada.
        res.status(200).json({ message: "Transação atualizada com sucesso." });
    } catch (error) {
        console.error("Error in putTransaction: ", error.message);

        // Retorna uma resposta de erro 500 ao cliente, indicando que ocorreu um erro no servidor.
        res.status(500).json({ message: "Erro ao atualizar a transação." });
    }
}

export default putTransaction;
