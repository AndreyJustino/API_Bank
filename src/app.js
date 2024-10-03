// Importa o framework Express, que facilita a criação de APIs e servidores HTTP.
import express from "express"

// Importa o CORS (Cross-Origin Resource Sharing), que é um middleware para permitir requisições entre diferentes origens (domínios).
import cors from "cors"

// Importa os arquivos de rotas para as diferentes funcionalidades da aplicação.
// Cada um desses arquivos define um conjunto de endpoints relacionados a contas, transações e usuários.
import routerAccounts from "./routes/accounts/accounts.routes.js"
import routerTransaction from "./routes/transaction/transaction.routes.js"
import routerUser from "./routes/user/user.routes.js"

// Cria uma instância da aplicação Express.
const app = express()

// Configura o aplicativo para usar o middleware que transforma as requisições com corpo em JSON.
// Isso é essencial para lidar com dados enviados no formato JSON nas requisições.
app.use(express.json())

// Configura o middleware de CORS para permitir que a API seja acessada por diferentes origens (cross-origin requests).
// - `origin: '*'`: Permite que qualquer origem acesse a API.
// - `methods: ['GET', 'POST', 'PUT', 'DELETE']`: Especifica os métodos HTTP permitidos nas requisições.
// - `allowedHeaders: ['Content-Type', 'Authorization']`: Define os cabeçalhos permitidos nas requisições, como tipo de conteúdo e autorização.
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))

// Define as rotas da aplicação para cada funcionalidade, associando as rotas específicas de cada área (contas, transações e usuários).
// Essas rotas são definidas nos arquivos importados no início.
app.use(routerAccounts)
app.use(routerTransaction)
app.use(routerUser)

// Exporta a aplicação configurada para ser usada em outros arquivos, como por exemplo no arquivo onde o servidor será iniciado.
export default app
