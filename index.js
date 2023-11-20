//require modules
let express = require("express")
let http = require("http")
let path = require("path")
let hbs = require("hbs")
let app = new express()

//path
let partial_path = path.join(__dirname,"/template/partial")
let temp = path.join(__dirname,"/template/views")
let static_path = path.join(__dirname,"/public")
    

app.set("views",temp)
hbs.registerPartials(partial_path)
app.set("view engine","hbs");


app.use(express.static(static_path))

    app.get("/",(req,res)=>{
        res.render("home")
    })
    app.get("/wether",(req,res)=>{
        res.render("index")
    })
    app.get("/about",(req,res)=>{
        res.render("about")
    })




    app.listen(8000,()=>{
        console.log("server is start")
    })
