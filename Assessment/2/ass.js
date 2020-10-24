const {send} =require("process")
express = require("express");
app = express();

crud = require("../2/storage.json");

app.get("/hotelCreate").function(req,res)
{

    hotelList=[];
    CRUD.forEach(element => {
        hotelList.push(element)
        
    });
     res.hotelList;

}
app.get("/hotelUpdate").function(req,res)
{
    hotelList=[];
    crud.forEach(element => {
        hotelList.push(element)
    });
    res.hotelList;
}
app.get("/hotelRead").function(req,res)
{
    hotelList=[];
    crud.forEach(element => {
        hotelList.push(element)
    });
    res.hotelList;
}
app.get("/hotelDelete").function(req,res)
{
    hotelList=[];
    crud.forEach(element => {
        hotelList.pop(element)
    });
    res.hotelList;
}

app.listen(1234,function(req,res)
{
    console.log("listening");
})
