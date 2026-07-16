const mongoose=require('mongoose');


async function connectdb (){
   try{
    await mongoose.connect(process.env.MONGODB_URLCCCCCCCC);
    console.log("connected");

   } 
   catch(err){
    console.log("something went wrong");

   }
}
module.exports=connectdb;