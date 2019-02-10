const express=require('express');
const app=express();

const port=process.env.port||3000;

app.use(express.static(__dirname+'/dist/LoadViewApp'));

app.get('/*',(req,res)=>res.render('index'));
app.listen(port,()=>console.log("running.."));
