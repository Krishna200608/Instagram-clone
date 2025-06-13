import mongoose from "mongoose";

const connectDB = async () => {
    const databaseName = "instagram";
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${databaseName}`);
        console.log('mongodb connected successfully.');
    } catch (error) {
        console.log(error);
    }
}
export default connectDB;