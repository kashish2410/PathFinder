const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"/public")));


app.get("/pathfinder",(req, res)=>{
    res.render("./ejs/index.ejs");
})

app.get("/pathfinder/quiz",(req,res)=>{
    res.render("./ejs/quiz.ejs");
})

app.listen(2415, ()=>{
    console.log("Listening to port");
})