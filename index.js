const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render("index");
})

app.listen(port, () => {
    console.log(`Lisening at port ${port} in http://localhost:3000`);
})