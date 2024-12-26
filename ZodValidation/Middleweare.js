const signupValidate = (schema)=>async(req,res,next)=>{
    try{
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next()
    }catch(er){
       
        res.status(400).send(er.issues[0].message)
    }
}

module.exports = signupValidate