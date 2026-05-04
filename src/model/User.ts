import mongoose, {Schema, Document} from "mongoose";
 
export interface Message extends Document { 
    // interface for the Message document
    content: string;
    createdAt: Date;
}

// in mongoose, String written in Capital and in typescript, string is written in small letter
const MessageSchema: Schema<Message> = new Schema({
  content: { 
    type: String, // here if i write number instead of String, it will give an error because the content field is expected to be a string, but if we write number, it will expect a number and will give an error when we try to save a Message document with a string content.
    required: true 
  },
  createdAt: { 
    type: Date, 
    required: true,
    default: Date.now 
  }
});

export interface User extends Document{
    username: string;
    email: string;
    password: string;
    verifyCode: string;
    verifyCodeExpiry: Date;
    isVerified: boolean;
    isAcceptingMessage: boolean;
    message: Message[]; // an array of Message documents, which is a reference to the Message collection in MongoDB. Each element in the message array will be an ObjectId that references a Message document.
}

const UserSchema: Schema<User> = new Schema({
    username: {
        type: String,
        required: [true, "Username is required"], // the second parameter is an error message that will be shown if the username field is not provided when creating a new User document.
        trim: true,
        unique : true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        match: [/\S+@\S+\.\S+/, "Please use a valid email address"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    verifyCode: {
        type: String,
        required: [true, "Verify code is required"]
    },
    verifyCodeExpiry: {
        type: Date,
        required: [true, "Verify code expiry is required"]
    },
    isVerified: {
        type: Boolean,
        required: false
    },
    isAcceptingMessage: {
        type: Boolean,
        required: true
    },
    message: [MessageSchema] // an array of Message documents, which is a reference to the Message collection in MongoDB. Each element in the message array will be an ObjectId that references a Message document.
});

const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User", UserSchema);

export default UserModel;


// Interface:- a structure that defines the shape of an object, specifying the properties and their types. It is used for type-checking and ensuring that objects adhere to a specific structure. In this case, the Message interface defines the structure of a Message document in MongoDB, with content as a string and createdAt as a Date.

// this look like message: [MessageSchema]
// User
//  ├── username
//  ├── email
//  └── message[]  (array)
//        ├── Message 1
//        │     ├── content
//        │     └── createdAt
//        │
//        ├── Message 2
//        │     ├── content
//        │     └── createdAt