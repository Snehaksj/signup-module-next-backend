import mongoose, { Document, Schema, Model } from "mongoose";

interface IUser extends Document {
  username: String;
  email: String;
  password: String;
  isVerified: Boolean;
}

const userSchema: Schema<IUser> = new Schema({
  username: {
    type: String,
    required: [true, "Username required"],
    unique: true,
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Email required"],
  },
  password: {
    type: String,
    required: [true, "Password required"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
});

const User: Model<IUser> =
  mongoose.models.User || mongoose.model("User", userSchema);
export default User;
