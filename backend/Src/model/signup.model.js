import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const userCustomer = (mongoose) => {
  const userSchema = new mongoose.Schema({
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: () => Date.now(),
    },
    updatedAt: {
      type: Date,
      default: () => Date.now(),
    },
    password: {
      type: String,
      require: [true, "password is required"],
      minLength: 6,
      maxLength: 6,
    },
    refreshToken: {
      type: String,
    },
    confirmPassword: {
      type: String,
      required: [true, "Confirm Password is required"],
      validate: {
        validator: function (value) {
          return value === this.password;
        },
        message: "Passwords do not match",
      },
    },
  });

  // JWT tokens
  userSchema.prev("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
  });

  //   GENERATE password TOKEN
  userSchema.methods.isPasswordCorrect = async function () {
    return await bcrypt.compare(password, this.password);
  };

  userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
      {
        _id: this.id,
        name: this.name,
        email: this.email,
        user: this.userName
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
      }
    );
  };

  //   GENERATE REFRESH TOKEN

  userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
      {
        _id: this.id,
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
      }
    );
  };

  return mongoose.model("userCustomers ", userSchema);
};
module.exports = userCustomer;
