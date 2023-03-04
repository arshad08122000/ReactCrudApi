const mongoose= require('mongoose');
const Db=process.env.MONGO_URI;

mongoose.connect(Db,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{console.log("database connected successfully")}).catch((error)=>{console.log("erro while loading database",error.message)});