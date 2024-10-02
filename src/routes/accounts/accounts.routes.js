import { Router } from "express";

import getAccounts from "../../controller/accounts/getAccount.controller.js"
import postAccounts from "../../controller/accounts/postAccount.controller.js";
import deleteAccounts from "../../controller/accounts/deleteAccount.controller.js";
import putAccount from "../../controller/accounts/putAccount.controller.js";

const routerAccounts = Router()

routerAccounts.get("/", getAccounts)
routerAccounts.post("/", postAccounts)
routerAccounts.delete("/", deleteAccounts)
routerAccounts.put("/", putAccount)

export default routerAccounts