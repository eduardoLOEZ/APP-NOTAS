require("dotenv").config()
const express = require("express")
const expressLayouts = require('express-ejs-layouts');
const session = require("express-session")
const methodOverride = require("method-override");
const passport= require("passport")
const MongoStore= require("connect-mongo")
const  {conectionDB} = require("./DB")

const app = express()
const port= 5000

app.use(session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.DB,
        
    })
}))




app.use(passport.initialize())
app.use(passport.session())

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(methodOverride("_method"))

conectionDB()


app.use(express.static("public"))


app.use(expressLayouts)
app.set("layout", "./layouts/main" )
app.set("view engine", "ejs")


//rutas pagina y dashboard por ahora 
app.use("/", require("./server/routes/auth")) //rutas de auth con google 
app.use("/", require("./server/routes/index"))//rutas de la pagina principal y about
app.use("/", require("./server/routes/dashboard") ) //rutas de las notas


//ruta para renderizar el index
app.get("/", (req,res)=>{

    const locals= {
        title: "hello world 123",
        description: "notes"
    }
    res.render("index", locals)
})

//manejo de errores 404
app.get("*", (req,res)=>{
    res.status(404).render("404")
})

app.listen(port, ()=>{
    console.log("corriendo servidor")
})