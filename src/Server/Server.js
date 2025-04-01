const express = require('express');
const mongoose= require('mongoose');
const cors = require('cors');
const userModel = require('./user');



const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/LionsTv");


app.post('/login', (req,res) => {
    const {userName,pass} = req.body;
    
    userModel.findOne({userName:userName})
    .then(user => {
        if(user){
            if(user.pass === pass){
                res.json("Success")
            }else{
                res.json("The password is incorrect");
            }
        }else{
            res.json("no user present Please Signup");
        }
    })
})



app.post('/register',(req,res) => {
    userModel.create(req.body).then(users => res.json(users)).catch(err => res.json(err))
})


app.listen(5000,() =>{
    console.log("Server is running");
})