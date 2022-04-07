const { Router } = require("express");

const usersRouter = Router();

usersRouter.get("/login", login);
    

usersRouter.get("/register", register);
    
module.exports =usersRouter;