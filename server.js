const express = require("express")
const path = require("path")

var app = express()
var PORT = 3000;

app.use(express.urlencoded({ extended:true }))
app.use(express.json())


const tables = [];
const waitList = [];


app.get("/", function(req,res) {
    res.sendFile(path.join(__dirname, "index.html"))
})

app.get("/reserve", function(req,res) {
    res.sendFile(path.join(__dirname, "reserve.html"))
})

app.get("/tables", function(req, res) {
    res.sendFile(oath.join(__dirname, "tables.html"))
})

app.get("/api/reservations", function(req,res) {
    return res.json(tables)
})

app.get("/api/waitlist", function(req, res) {
    return res.jsoom(waitList)
})

