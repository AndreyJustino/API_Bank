// Importa o arquivo que contém a configuração do app Express, onde foram definidas as rotas e middlewares.
import app from "./src/app.js";

// Importa a instância do Sequelize (ORM que facilita a interação com o banco de dados), configurada no arquivo 'config.js'.
import sequelize from "./src/database/config.js";

// O método `sequelize.sync()` garante que as tabelas do banco de dados estejam sincronizadas com os modelos definidos na aplicação.
// `.then(async () => { ... })` indica que, após a sincronização, será executada uma função assíncrona (async).
sequelize.sync().then(async () => {

    try {
        // `sequelize.authenticate()` tenta autenticar a conexão com o banco de dados, garantindo que tudo esteja correto.
        await sequelize.authenticate()

        // Caso a autenticação seja bem-sucedida, o servidor Express será iniciado na porta 3000.
        // `app.listen(3000, (req,res) => {...})` inicia o servidor e exibe uma mensagem no console indicando que ele foi iniciado com sucesso.
        app.listen(3000, (req, res) => {
            console.log("Server started, port:", 3000)
        })
    } catch (error) {
        // Se ocorrer um erro ao tentar autenticar com o banco de dados, ele será capturado no bloco `catch`,
        // e uma mensagem de erro será exibida no console com o motivo do problema.
        console.error("Error connecting to database: ", error.message)
    }
})
