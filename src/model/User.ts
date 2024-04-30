import mongoose, {Schema, Document} from "mongoose";
import { Content } from "next/font/google";


export interface Message extends Document{
    content: string;
    createdAt: Date;
}


const MessageSchema: Schema<Message> = new Schema({
    content: {
        type: String,
        required: true,
        
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }

})


export interface User extends Document {
    username: string;
    email: string;
    password: string;
    verifyCode: string;
    verifyCodeExpiry: Date;
    isVerified: boolean;
    isAcceptMessage: boolean;
    messages: Message[];
}
const UserSchema: Schema<User> = new Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        trim: true,
        unique: true
    },
    email:{
        type: String,
        required: [true, "Email is required"],
        trim: true,
        unique: true,
        match: [/.+\@.+\..+/, "please use a valid email address"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    verifyCode: {
        type: String,
        required: [true, "verifyCode is required"],
    },
    
    verifyCodeExpiry: {
        type: Date,
        required: [true, "verifyCodeExpiry is required"],
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAcceptMessage: {
        type: Boolean,
        default: true,
    },
    messages: [MessageSchema]


})


const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User", UserSchema)

export default UserModel;