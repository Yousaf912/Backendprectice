const mongose = require("mongoose");
const bcrypt = require("bcrypt")

const userSchema = new mongose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    password:{
        type:String,
        required:true
    }
})

userSchema.pre('save',async function(next){
    if(!this.isModified("password")){
        next();
    }
    try{
        const modifiedPassword = await bcrypt.hash(this.password,10);
      this.password = modifiedPassword;
    }catch(er){
        next(er)
    }

    
})

const user = mongose.model('users',userSchema);
module.exports = user;