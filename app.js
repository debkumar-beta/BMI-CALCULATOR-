const express = require("express");
const bodyParser = require("body-parser");
const app= express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
});


app.post("/",function (req,res) {
var height=req.body.height;
var weight=req.body.weight;
var age= req.body.age;
var bmi= ((weight*10000)/(height*height));
var mota;
if(bmi<18.5){
    mota = 'Underweight';
     }else if(18.5<=bmi&&bmi<=24.9){
    mota = 'Healthy';
     }else if(25<=bmi&&bmi<=29.9){
    mota = 'Overweight';
     }else if(30<=bmi&&bmi<=34.9){
    mota = 'Obese';
     }else if(35<=bmi){
    mota = 'Extremely obese';
     }

res.send("<h1>At the age of </h1>"+age+ "<h1>Your BMI value is </h1> "+ bmi +" <h1>You are :</h1> " + mota);





})


app.listen(3000,function(){
    console.log("The server is running");
});