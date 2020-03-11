const express = require("express")
const path = require("path")

var app = express()
var PORT = 3000;

app.use(express.urlencoded({ extended:true }))
app.use(express.json())


/*
app.get(/)
app.get(/reserve)
app.get(/tables)

app.get(/api/reservations)
app.get(/api/tables)
*/

