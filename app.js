const express = require("express")
const path = require("path")
const fs = require("fs")

const app = express()

//---Ruta absoluta (aunque no es estrictamente necesario siempre que este a la misma altura que el archivo) 

let pathPublic = path.resolve("public")

app.use(express.static(pathPublic)) // establece cual es la carpeta estatica para acceder con rutas alternativas, por ejemplo desde los html
app.use(express.json());
const PORT = 3030
//--------------PATHS------------

//---HTML---

const pathIndex = path.resolve("views", "index.html") //Forma Alternativa = let pathPublic2 = path.resolve(__dirname, "views/index.html")
const pathMediciones = path.resolve("views", "mediciones.html") 
const pathAgregados = path.resolve("views", "agregados.html") 

//---JAVASCRIPT---

const pathMedicionesJS = path.resolve("js", "mediciones.js") 


//----Peticiones CRUD ----

app.get("/", (req,res) => res.sendFile(pathIndex))
app.get("/mediciones", (req,res) => res.sendFile(pathMediciones))
app.get("/agregados", (req,res) => res.sendFile(pathAgregados))
app.get("/mediciones.js", (req,res) => res.sendFile(pathMedicionesJS))
app.post("/measureForm", (req,res) => {
    
    console.log(req.body);

})




app.listen(PORT, () =>{
    console.log(`Se conecto Correctamnete a 
    http://localhost:${PORT}`);
})