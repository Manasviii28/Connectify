const express=require("express");
const app=express();
const userModel=require('./models/user');
const postModel=require('./models/post')
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const cookieparser=require('cookie-parser');
const post = require("./models/post");
const user = require("./models/user");
require("dotenv").config()
const PORT=process.env.PORT;
const JWT_SECRET=process.env.JWT_SECRET;


app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieparser());

const db=require("./config/db");
db();

app.get("/",(req,res)=>{
    res.render("index");
});

app.post("/signup",(req,res)=>{
    let {email,name,password,age}=req.body;
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, async(err, hash)=> {
            let user= await userModel.create({
                name,
                email,
                age,
                password:hash
            });
        });
    });
    res.send("succesfully registered");
});

app.get("/login",(req,res)=>{
    res.render("login");
});

app.post("/login",async(req,res)=>{
    let {email,password}=req.body;
    let user= await userModel.findOne({email});
    if(!user) res.send("invalid credintals");
    
    bcrypt.compare(password, user.password, function(err, result) {
        if(result){ 
            let token=jwt.sign({userid:user._id},"shhh");
            res.cookie("token",token);
            res.redirect("/profile");

        } 
        if(!result)  res.send("invalid password");
    });   
});

app.get("/logout",(req,res)=>{
    res.cookie("token","");
    res.redirect("/login");
});


app.get("/profile",isloggedin,async(req,res)=>{
    let user=await userModel.findById(req.user.userid).populate("posts");
    res.render("profile",{user});    
});

app.post("/profile",isloggedin,async(req,res)=>{
    let {content}=req.body;
    let user= await userModel.findById(req.user.userid);
    const post= await postModel.create({
        content,
        user:req.user.userid
    });
    user.posts.push(post._id);
    await user.save();   
    
    res.redirect("/profile");
});

app.get("/edit/:id",isloggedin,async(req,res)=>{
    let post=await postModel.findById(req.params.id);
    let user= await userModel.findById(req.user.userid).populate("posts");
    res.render("edit",{post});    
});

app.post("/update/:id",isloggedin,async(req,res)=>{
    let{content}=req.body;
    
    let user= await userModel.findById(req.user.userid);
    const post= await postModel.findByIdAndUpdate(
        req.params.id,{
            content:req.body.content
        }
    )
    res.redirect("/profile");    
});



app.get("/delete/:id",isloggedin,async(req,res)=>{
    
    let user= await userModel.findById(req.user.userid);
    user.posts.pull(post);
    await user.save();
    res.redirect("/profile");    
});


function isloggedin (req,res,next){

    if(req.cookies.token==="") res.send("log in first");
    else{
        let data=jwt.verify(req.cookies.token,JWT_SECRET);
        req.user=data;
        next();
    }   
}




app.listen(PORT);