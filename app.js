const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");
const app=express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/singnup.html");
});

app.post("/",function(req,res){

  var firstName=req.body.fName;
  var lastName=req.body.lName;
  var email=req.body.email;

console.log(firstName , lastName , email);
})

app.listen(3000,function(){
  console.log("Server is running on port 3000")
});

//67b8af65b1d98aab8d6297d03e9b07c7-us17
