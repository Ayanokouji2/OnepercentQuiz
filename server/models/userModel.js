import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        index: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type:String,
        required: true
    }
},{timestamps: true})


const UserModel = model.User || model("users", userSchema);
console.log(model, "This is model from usermodel")

export default UserModel;