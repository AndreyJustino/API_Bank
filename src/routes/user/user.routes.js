import { Router } from "express";

import deleteUser from "../../controller/user/deleteUser.controller.js";
import getUser from "../../controller/user/getUser.controller.js";
import postUser from "../../controller/user/postUser.controller.js";
import putUser from "../../controller/user/putUser.controller.js";
import postLogin from "../../controller/user/postLogin.js";

const routerUser = Router();

routerUser.get("/getUser/:email", getUser);

routerUser.post("/postUser", postUser);
routerUser.post("/loginUser", postLogin);

routerUser.delete("/deleteUser", deleteUser);

routerUser.put("/putUser/:id", putUser);

export default routerUser;
