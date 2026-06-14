const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
    .then(() => console.log("Connection successful!"))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const userSchema = new Schema({
    username: String,
    email: String,
});

const postSchema = new Schema({
    content: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

const getData = async() =>{
    let result = await Post.findOne({}).populate("user");
    console.log(result);
}

getData();

// const addData = async() =>{
//     let user = await User.findOne({username: "samruddhi29"});

//     let post2 = new Post({
//         content: "Bye bye!",
//         likes: 10,
//     });

//     post2.user = user;
//     await post2.save();
// };

// addData();

// const del = async() =>{
//     await User.findByIdAndDelete("66e4685a750c584c9ddb580c");
//     await Post.findByIdAndDelete("66e46d905ff0457f4a5603f8");
// }

// del();