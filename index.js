const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser());

app.post('/events', async (req, res) => {
    console.log(req.body);
    await axios.post(`http://localhost:4000/events`,req.body);
    await axios.post(`http://localhost:5000/events`,req.body);


});

app.listen(6000, ()=> {
    console.log("listening 6000");
})