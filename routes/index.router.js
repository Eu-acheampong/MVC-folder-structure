const { Router } = require("express");
const res = require("express/lib/response");
const{login, register} = require("../controllers/index.controller");

const indexRouter = Router();

indexRouter.get("/login", req, res);

indexRouter.get("/register", register); 

module.exports = indexRouter;
