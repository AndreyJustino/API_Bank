// Importa o modelo `transactions` do arquivo "model.js", que representa a tabela de transações no banco de dados.
import { transactions } from "../../model/model.js";

// Define uma função assíncrona chamada `deleteTransaction` que será utilizada para deletar uma transação existente.
async function deleteTransaction(req, res) {
    try {
        // Aqui o código para deletar a transação no banco de dados será implementado.
        // Normalmente, você pode obter o ID da transação a ser deletada dos parâmetros da requisição (req.params).
        const { id } = req.params;

        // Verifica se a transação com o ID fornecido existe no banco de dados.
        const transaction = await transactions.findByPk(id);

        // Se a transação não for encontrada, retorna uma resposta 404 (não encontrado).
        if (!transaction) {
            return res.status(404).json({ message: "Transação não encontrada" });
        }

        // Deleta a transação do banco de dados.
        await transaction.destroy();

        // Retorna uma resposta de sucesso informando que a transação foi deletada.
        res.status(200).json({ message: "Transação deletada com sucesso" });
    } catch (error) {
        // Se ocorrer qualquer erro durante a execução, ele será capturado aqui.
        // O erro será registrado no console.
        console.error(error);

        // Retorna uma resposta 500 (erro interno do servidor) com a mensagem de erro.
        res.status(500).json({ message: "Erro ao deletar a transação" });
    }
}

// Exporta a função `deleteTransaction` para que ela possa ser utilizada em outros arquivos,
// como nas rotas ou controladores da API.
export default deleteTransaction;
