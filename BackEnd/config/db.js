import mongoose from "mongoose";

const DBconnect = async()=>{
try {

  const con = await mongoose.connect(process.env.MONGO_URL)
  console.log(`MongoDB Connected Sucessfully`);
    
} catch (err) {
    console.log('Something error',err);
}
  
}

export default DBconnect;