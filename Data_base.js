import mongoose from "mongoose";

const url = "mongodb://localhost:27017/shopping"; 

const value = "Hello World";
const split = value.split(" ")[1]
console.log(split);


const Data_base = async () => {
    try {
        await mongoose.connect(url);
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection error:", error);
    }
};

export default Data_base;
