import { Router } from "express";

import deleteTransaction from "../../controller/transaction/deleteTransaction.controller.js";
import getTransaction from "../../controller/transaction/getTransaction.controller.js";
import postTransaction from "../../controller/transaction/postTransaction.controller.js";
import putTransaction from "../../controller/transaction/putTransaction.controller.js";

const routerTransaction = Router();

routerTransaction.get("/getTransaction/:id", getTransaction);

routerTransaction.post("/postTransaction", postTransaction);

routerTransaction.delete("/deleteTransaction/:id", deleteTransaction);

routerTransaction.put("/putTransaction/:id", putTransaction);

export default routerTransaction;
