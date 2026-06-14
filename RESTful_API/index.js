const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require("method-override");

app.use(express.urlencoded({ extened: true }));
app.use(methodOverride('_method'));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id: uuidv4(),
        username: "samruddhinadgouda",
        content: "I enjoy doing coding. It makes me feel better!"
    },
    {
        id: uuidv4(),
        username: "vedantikawagh",
        content: "I love listening music which give me the peaceful vibes."
    },
    {
        id: uuidv4(),
        username: "nikhilpawar",
        content: "I go to gym everyday which make me fit and healthy."
    },
];

//Index API
app.get("/posts", (req, res) =>{
    res.render("index.ejs", { posts });
});

//Create and View API
app.get("/posts/new", (req, res) =>{
    res.render("new.ejs");
});
app.post("/posts", (req, res) =>{
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({ id, username, content });
    res.redirect("/posts");
});
app.get("/posts/:id", (req, res) =>{
    let { id } = req.params;
    // console.log(id);
    let post = posts.find((p) => id == p.id);
    // console.log(post);
    res.render("show.ejs", { post });
});

//Update API
app.patch("/posts/:id", (req, res) =>{
    let { id } = req.params;
    let newContent = req.body.content;
    // console.log(newContent);
    let post = posts.find((p) => id == p.id);
    post.content = newContent;
    console.log(post);
    res.redirect("/posts");
});
//Edit route
app.get("/posts/:id/edit", (req, res) =>{
    let { id } = req.params;
    let post = posts.find((p) => id == p.id);
    res.render("edit.ejs", { post });
});

//Delete API
app.delete("/posts/:id", (req, res) =>{
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
});

app.listen(port, () =>{
    console.log(`Listening to port: ${port}`);
});