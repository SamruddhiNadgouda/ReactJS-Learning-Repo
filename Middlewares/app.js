const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

// app.use((req, res, next) =>{
//     console.log("Hi, I am 1st middleware");
//     next();
// });

// app.use((req, res, next) =>{
//     console.log("Hi, I am 2nd middleware");
//     next();
// });

//logger - morgan
// app.use((req, res, next) =>{
//     req.time = new Date(Date.now());
//     console.log(req.method, req.path, req.time);
//     next();
// });

// app.use("/random", (req, res, next) =>{
//     console.log("I am only for random.");
//     next();
// });

const checkToken = (req, res, next) =>{
    let { token } = req.query;
    if(token === "giveaccess"){
        next();
    }
    throw new ExpressError(401, "ACCESS DENIED!");
};

app.get("/api", checkToken, (req, res) =>{
    res.send("data");
});

app.get("/", (req, res) =>{
    res.send("Hi, I am root.");
});

app.get("/random", (req, res) =>{
    res.send("This is a random page");
});

app.get("/err", (req, res) =>{
    abcd=abcd;
});

app.use("/admin", (req, res) =>{
    throw new ExpressError(403, "Access to admin is Forbidden");
});

app.use((err, req, res, next) =>{
    // console.log("---ERROR---");
    let {status = 500, message = "Some error occured"} = err;
    res.status(status).send(message);
})

app.use((req, res) =>{
    res.status(404).send("Page not found.");
});

app.listen(8080, () => {
    console.log("server listening to port 8080");
});
