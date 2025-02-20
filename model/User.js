import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { type : String, required: true},
  name: String,
  username: { type : String, required: true},
  profilepic: String,
  coverpic: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  razorpayc: String
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
