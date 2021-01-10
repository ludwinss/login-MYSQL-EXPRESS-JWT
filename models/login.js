const mysql=require('mysql');
const config=require('../config/appConfig').db;

const connection = mysql.createConnection(config)

connection.connect(function(err){
  if(err){
    console.log(err);
  }
})

module.exports={
  getById(id,callback){
    connection.query('SELECT * from users where id=?',[id],function(error,results,field){
      if(error) {
        throw error;
      }else{
        callback(null,results)
      }
    })
  },
  add(body,callback){
    let values=Object.values(body)
    connection.query('INSERT INTO users(nick_name,passwd,birthdate,gender,name,last_name,mail) values(?,?,?,?,?,?,?) RETURNING* ',values,function(error,results,field){
      if(error){
        throw error;
      }else{
        callback(null,results);
      }
    })
  },
  getAll(callback){
    connection.query('SELECT id, nick_name,passwd,DATE_FORMAT(birthdate,\'%d-%m-%Y\') as birthdate,gender,name,last_name,mail FROM users',(err,results)=>{
      if(err) throw err;
      else callback(null,results);
    })
  },
  getByUser(user,callback){
    connection.query('SELECT id,nick_name,CONVERT(passwd USING utf8) as passwd FROM users where nick_name=?',[user],(err,results)=>{
      if(err) throw err;
      else callback(null,results);
    })
  }
};
