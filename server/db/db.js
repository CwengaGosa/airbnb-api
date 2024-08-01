import mongoose from "mongoose";

const connectDB = async () =>{
    try {
        const con = await mongoose.connect(process.env.MONGO_URI)
        console.log(`mongoDB connected successfully: ${con.connection.host}`)
    } catch (error) {
        console.log(`mongoDB connection failed: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB;