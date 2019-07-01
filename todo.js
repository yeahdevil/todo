const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

let items=["food","eat"];
let work=[];
app.use(express.static("public"));
app.get("/",function(req,res)
{
    let options={weekday: "long" ,day:"numeric" , month :"long"};
    let day =new Date().toLocaleDateString("en-us",options);
      
    res.render("liest",{day:day,items:items});
});

app.post("/",function(req,res)
{
    if(req.body.item=="")
       return res.redirect("/");
     items.push(req.body.item);
     res.redirect("/");
});

app.listen(8000,function()
{
  console.log("listen in 8000");
});