const express = require("express");
const app = express();

// console.dir(app);

let port = 8080;

app.listen(port, () =>{
    console.log(`app is listening on port ${port}`);
});

// app.use((req, res) =>{
//     console.log("request receiver!");
//     // res.send("This is a basic response");
//     // res.send({
//     //     name: "Samruddhi",
//     //     age: 21,
//     // });
//     let code = "<h1>Fruits</h1> <ul><li>Apple</li><li>Orange</li></ul>";
//     res.send(code);
// });

app.get("/", (req, res) =>{
    res.send("you contacted root path!");
});

// app.get("/apple", (req, res) =>{
//     res.send("you contacted apple path");
// });

// app.get("/orange", (req, res) =>{
//     res.send("you contacted orange path");
// });

// app.get("*", (req, res) =>{
//     res.send("This path doesn't exist!");
// });

// app.post("/", (req, res) =>{
//     res.send("You send a post request to root!");
// });

app.get("/:username/:id", (req, res) => {
    // console.log(req.params);
    // res.send("hello, i am root");
    let { username, id } = req.params;
    let htmlStr = `<h1>This account belongs to @${username}.</h1>`;
    res.send(htmlStr);
});

app.get("/search", (req, res) => {
    // console.log(req.query);
    let { q } = req.query;
    if(!q){
        res.send(`<h1>Nothing Searched</h1>`);
    }
    res.send(`<h1>search results for query: ${q}</h1>`);
});