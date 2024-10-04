import mongoose from "mongoose";


export const connectDB = async() => {
    try{
        mongoose.connect(process.env.MongodbUrl)
        console.log("Databases Connected Successfully")
    }catch(err) {
        console.log(err)
        }
}
