import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({
    path: ".env"
});


const databaseConnection = () => {
    mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Database connected successfully");
    }).catch((error) => {
        console.log(error);
    })
};

export default databaseConnection;