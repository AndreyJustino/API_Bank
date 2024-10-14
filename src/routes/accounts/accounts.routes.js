import { Router } from "express";

import getAccounts from "../../controller/accounts/getAccount.controller.js";
import postAccounts from "../../controller/accounts/postAccount.controller.js";
import deleteAccounts from "../../controller/accounts/deleteAccount.controller.js";
import putAccount from "../../controller/accounts/putAccount.controller.js";

const routerAccounts = Router();

routerAccounts.get("/getAccounts/:userId", getAccounts);

routerAccounts.post("/postAccounts", postAccounts);

routerAccounts.delete("/deleteAccounts/:userId", deleteAccounts);

routerAccounts.put("/putAccount/:id", putAccount);

export default routerAccounts;
