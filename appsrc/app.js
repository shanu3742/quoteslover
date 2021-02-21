const express = require("express");
const app = express();
const port= process.env.PORT||3500;

app.get("/",(req,res) => {
    res.send("listen from server side....");
})

app.post("/teachers", (req,res) => {
    res.send("listen from page")
})


app.listen(port,() => {
    console.log("connection is successful");
})
