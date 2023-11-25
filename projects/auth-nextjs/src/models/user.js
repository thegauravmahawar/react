import mongoose from "mongoose";

const schema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please provide an email.'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Please provide a password.']
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
  createdAt: Date,
  updatedAt: Date
})

const User = mongoose.models.users || mongoose.model("users", schema);

export default User;