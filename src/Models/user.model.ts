import mongoose, { Schema } from "mongoose";
import { User } from "../interfaces";

const userSchema = new Schema<User>(
  {
    email: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: false },
  },
  { timestamps: true }
);

const UserModel = mongoose.model<User>("User", userSchema);

export default UserModel;
