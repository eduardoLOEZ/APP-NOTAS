const isLoggedIn= (req,res,next) =>{
  if(req.user){
    next()
  }else{
    res.send("acesso denegado")
  }
}

module.exports= { isLoggedIn }