const user = require("../Schema/UserSchema")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const securityKey = process.env.SECURITY_KEY

const controler ={
    home:async(req,res)=>{
        try{
            res.status(200).send('this is home page with router and controller')
        }catch(er){throw er}
    },
    register:async(req,res)=>{
        const {email,password,name} = req.body
        try{
          const userexist = await user.findOne({email});
          if(userexist){
            res.status(400).send({message:'Email is already registered'})
          }else{
           await user.create({email,password,name})
           res.status(200).send({message:'User Registered sucessfully'})
          }
        }catch(er){throw er}
    },


    login:async(req,res)=>{
      try{
        const findUser =await user.findOne({email:req.body.email});
        if(!findUser){
          res.status(401).send({message:"Wrong email"})
        }else{
          const checkPassword =await bcrypt.compare(req.body.password,findUser.password);
          if(!checkPassword){
            res.status(401).send({message:"wrong password"})
          }else{
          const token = await jwt.sign({...findUser},securityKey);
          res.status(200).send({token})
          }
        }
      }catch(er){throw er}
    }
}

module.exports =controler