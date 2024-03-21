//Middleware
const Middlewares = (req,res,next)=>{
    console.log("estamos en el middleware");
    console.log("hola ");
    next();
}
function encriptar (req,res,next){
    console.log("=====================================");
    console.log("encriptando");
    console.log("=====================================");
    next();
    
}

module.exports={
    Middlewares,encriptar
};