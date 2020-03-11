const express = require("express")
const path = require("path")

var app = express()
var PORT = process.env.PORT || 3000;

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
    res.sendFile(path.join(__dirname, "tables.html"))
})

app.get("/api/tables", function(req,res) {
    return res.json(tables)
})

app.get("/api/waitlist", function(req, res) {
    return res.json(waitList)
})
//-------------------------------------------
app.post("/api/tables", function(req,res) {
    var newReservation = req.body
if(tables.length <= 5){
    tables.push(newReservation);
}
else{
    waitList.push(newReservation)
}
res.json(newReservation)
    
})

app.post("/api/reserve", function(req, res) { 
    var newCustomer = req.body;
  
  
    console.log(newCustomer);
  
    if (tables.length < 5) {
        tables.push(newCustomer);
    }
    else {
        waitList.push(newCustomer);
    };
  
    res.json(newCustomer);
  });

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

  