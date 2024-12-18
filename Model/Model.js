import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true }
});

// Using "shopping" as the collection name
const User = mongoose.model("user", UserSchema, "shopping");

export default User;