import { transactions } from "../../model/model.js";

async function getTransaction(req, res) {
    try {

        // Aqui será implementada a lógica para buscar as transações no banco de dados.
        // O modelo `transactions` será usado para buscar todas as transações armazenadas.
        const allTransactions = await transactions.findAll();

        // Verifica se existem transações no banco de dados.
        // Se não houver transações, retorna uma resposta 404 informando que não há dados disponíveis.
        if (!allTransactions || allTransactions.length === 0) {
            return res.status(404).json({ message: "Nenhuma transação encontrada" });
        }

        // Se houver transações, envia os dados de volta ao cliente como uma resposta JSON.
        res.status(200).json(allTransactions);
    } catch (error) {
        // Se ocorrer qualquer erro durante a execução, ele será capturado aqui.
        // O erro será registrado no console com uma mensagem descritiva para ajudar na depuração.

        
    } catch (error) {

        console.log("Error in getTransaction:", error.message);

        // Retorna uma resposta de erro 500 ao cliente, indicando que ocorreu um erro no servidor.
        res.status(500).json({ message: "Erro ao buscar transações" });
    }
}

export default getTransaction;
