const login=require('../models/login');

const jwt=require('../service/authenticationJWT');
module.exports={
  getByUser(req,res){
    let {user,password}=req.body;
    login.getByUser(user,function(err,results){
      if(err) res.status(400).send({message:'Mala Peticion'})
      if(results.length===0) res.status(404).send({message:'No existe ese Usuario'})
      // Aqui viene la comparacion de las contraseãs usando un encriptador
      if(results[0].passwd!==password) res.status(401).send({message:'Credenciales Incorrectos'})

      res.status(200).send({
        auth:true,
        token:jwt.sign(results[0].id)
      }) 
    })
  },
  getAll(req,res){
    login.getAll(function(err,results){
      if(err) res.status(404).send({message:'No Encontrado'})
      res.status(200).send(results)
    })
  },
  add(req,res){
    let {nick_name}=req.body;
    login.getByUser(nick_name,(err,results)=>{
      if(err) return res.status(500).send({message:'error interno'})
      if(results.length!==0) return res.status(406).send({message:'Nombre de usuario existe'})
      else{
        login.add(req.body,function(err,results){
          if(err) return res.status(399).send({message:'error pe'})
          return res.status(200).send({
            auth:true,
            token:jwt.sign(results[0].id)
          })
        })
      }
    })
  },
}
