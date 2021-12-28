const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser());

app.post('/events',(req, res) => {
    console.log(req.body);
});

app.listen(6000, ()=> {
    console.log("listening 6000");
})