import express from "express"
import cors from "cors"
import routerAccounts from "./routes/accounts/accounts.routes.js"
import routerTransaction from "./routes/transaction/transaction.routes.js"
import routerUser from "./routes/user/user.routes.js"

const app = express()

app.use(express.json())

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use(routerAccounts)
app.use(routerTransaction)
app.use(routerUser)

export default app