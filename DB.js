require("dotenv").config()
const mongoose= require("mongoose")


const conectionDB =()=>{
    try {
        mongoose.connect(process.env.DB)
        .then(()=>{console.log("conectado a la db")})
        .catch(()=>{console.log("error al conectar a la db")})
    } catch (error) {
        console.error(error)
    }
}
module.exports= {conectionDB}