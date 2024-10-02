import { Router } from "express";

import deleteUser from "../../controller/user/deleteUser.controller.js";
import getUser from "../../controller/user/getUser.controller.js";
import postUser from "../../controller/user/postUser.controller.js";
import putUser from "../../controller/user/putUser.controller.js";

const routerUser = Router()

routerUser.get("/", deleteUser)
routerUser.post("/", getUser)
routerUser.delete("/", postUser)
routerUser.put("/", putUser)

export default routerUser