// Importa o modelo `transactions` do arquivo "model.js", que representa a tabela de transações no banco de dados.
import { transactions } from "../../model/model.js";

// Define uma função assíncrona chamada `postTransaction` que será utilizada para criar uma nova transação.
async function postTransaction(req, res) {
    try {
        // Aqui será implementada a lógica para criar uma nova transação no banco de dados.
        // Os dados da nova transação serão extraídos do corpo da requisição (req.body).
        const { amount, type, description, accountId } = req.body;

        // Verifica se todos os dados obrigatórios foram fornecidos.
        // Se algum dado obrigatório estiver faltando, retorna um erro 400 informando que os campos são obrigatórios.
        if (!amount || !type || !accountId) {
            return res.status(400).json({ message: "Todos os campos obrigatórios devem ser preenchidos." });
        }

        // Cria uma nova transação usando o modelo `transactions` e os dados recebidos da requisição.
        const newTransaction = await transactions.create({
            amount,
            type,
            description,
            accountId
        });

        // Retorna a transação recém-criada como resposta ao cliente.
        res.status(201).json(newTransaction);
    } catch (error) {
        // Se ocorrer qualquer erro durante a execução, ele será capturado e registrado no console com uma mensagem descritiva.
        console.error("Error in postTransaction: ", error.message);

        // Retorna uma resposta de erro 500 ao cliente, indicando que ocorreu um erro no servidor.
        res.status(500).json({ message: "Erro ao criar a transação." });
    }
}

// Exporta a função `postTransaction` para que ela possa ser utilizada em outros arquivos,
// como nas rotas ou controladores da API.
export default postTransaction;
