const express = require("express");
const app = express();
const port = 3000;

// Importing the data from our fake database files.
const users = require("./data/users");
const posts = require("./data/posts");

// index route for Users

app.get("/api/users", (req, res) => {
    res.json(users);
});

// show route for users
app.get("/api/users/:id", (req, res) => {
    const user = users.find((u) => u.id == req.params.id);
    if (user) {
        res.json(user);
    } else {
        res.send("User Not Found")
}
})

app.listen(port, () => {
    console.log(`Server listening on port: ${port}.`);
});