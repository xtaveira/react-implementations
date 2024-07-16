import mongoose from "mongoose";

let isConnected = false; // track the connection status

export const connectToDb = async () => {
    console.log("try to connect to database")
    mongoose.set('strictQuery', true)//set the mongoose options

    if(isConnected) {
        console.log('MongoDB is already connected')
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected = true;

        console.log('MongoDB connected')

        // pass tzcdhIZRRC93645N

    } catch (error) {
        console.log(error)
    }
}