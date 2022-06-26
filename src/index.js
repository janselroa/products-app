const path = require("path")
const express = require("express")
const cookieParser = require("cookie-parser")
const morgan = require("morgan")
require("dotenv").config({
    path:"./.env"
})

const app = express()
const PORT = process.env.PORT || 3000

// midellwares 
app.use("/public",express.static(path.join(__dirname,"/public")))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan("dev"))
app.use(cookieParser())

//routes
app.use("/api",require("./routes/index"))
app.get("/",(req,res)=>res.sendFile("index.html",{root:"./src/views"}))

app.listen(PORT,()=>console.log(`Application running in http://localhost:${PORT}`))
