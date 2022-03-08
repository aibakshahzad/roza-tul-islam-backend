const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { DEFAULT_IMG } = require("../constants");

const UserSchema = new mongoose.Schema({
  name: { type: String, min: 3, max: 35, required: true },
  phone: { type: String, min: 11, max: 11, required: true },
  password: { type: String, min: 8, max: 25, required: true },
  avatar: {
    type: Object,
    default:
      DEFAULT_IMG,
  },
  isAdmin: { type: Boolean, default: false }
});

UserSchema.pre("save", async function (next) {
  try {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (error) {
    throw new Error(error);
  }
});

UserSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (error) {
    throw new Error(error);
  }
};

UserSchema.methods.generateAuthToken = function () {
  try {
    const token = jwt.sign(
      { _id: this._id.toString()},
      process.env.JWT_PRIVATE_KEY
    );
    return token;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = mongoose.model("User", UserSchema);
