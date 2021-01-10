const jwt=require('jsonwebtoken');
const jwtSecret=require("../config/appConfig").jwtSecret;

module.exports={
  sign(id){
    let payload={
      username:id
    }
    return jwt.sign(payload,jwtSecret,{
      expiresIn:'1d',
      algorithm:'HS256'
    })
  },
  verify(req,res,next){
    let token=req.headers['x-access-token'];
    if(!token){
      return res.status(401).send({
        auth:false,
        message:'No tienes un Token valido '
      })
    }
    jwt.verify(token,jwtSecret,(err,results)=>{
      if(err) return res.status(401).send({
        auth:false,
        message:'No tiene acceso'
      });
      next();
    })
  }
}
