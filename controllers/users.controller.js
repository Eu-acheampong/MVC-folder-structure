const welcome = (req, res) => {
    res.sed("h1>Login Successful!<h1>");
};

const greet = (req, res) => {
    res.send("<h1>Hello 👋, Fellow Programmers</h1>");
};

module.export ={
    login,
    register,
};