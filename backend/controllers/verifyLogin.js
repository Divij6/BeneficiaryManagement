import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const verifyLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(200).send({
        message: "User not found",
        success: false,
      });
    }

    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(200).send({
        message: "Invalid Credentials",
        success: false,
      });
    }

    
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(200).send({
      message: "Login Successful",
      success: true,
      token,
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error in Login",
      success: false,
      error,
    });
  }
};

export default verifyLogin;
