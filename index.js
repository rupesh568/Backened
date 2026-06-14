require('dotenv').config()


const express=require('express');
const app=express();
// const port=3000;

app.get('/',(req,res)=>{
    res.send("hello world!");
})

app.get('/home',(req,res)=>{
    res.send("I am at home");
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please login in at Rupesh website</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>Watch my youtube videos...</h2>')
})
app.listen(process.env.PORT,()=>{
    console.log(`app is listening on ${port}`);
})