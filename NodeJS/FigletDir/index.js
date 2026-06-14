const figlet = require("figlet");

figlet("Samruddhi", function (err, data) {
if (err) {
console.log("Something went wrong...");
console.dir(err);
return;
}
console.log(data);
});