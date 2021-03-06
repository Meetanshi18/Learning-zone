const express=require('express')
const path=require('path')
const htmlpath=path.join(__dirname,'../public')


//Express Server
const app=express()

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(htmlpath))
app.set("view engine", "ejs");


app.get('/',(req,res)=>{
    res.render("index");
})

app.get('/login',(req,res)=>{
   // console.log("hey");
  // console.log(req.body)
  //console.log(req.queryvalid)

    if(req.query.valid==0){
        res.render("login",{
            "error":"Incorrect Username & Password"
        });
    }
    else if(req.query.valid==1){
        res.render("login",{
            "error":"Enter Username & Password"
        });
    }
    else{


        res.render("login",{
            "error":""
        });
    }

    // res.render("login",{
    //     "error":""
    // });
})

app.get('/signup',(req,res)=>{
    res.render("signup");
})



const router=require('./router/route')


app.use(router)

module.exports = app

