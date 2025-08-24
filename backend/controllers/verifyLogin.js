import userModel from "../models/userModel.js";

export const verifyLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email, password });
    if (user) {      
      res.status(200).send({
        message: "Login Successful",
        success: true,
        data: user,
      });
    } else {
      res.status(200).send({
        message: "Invalid Credentials",
        success: false,
      });
    }
    }catch (error) {
      console.log(error);
      res.status(500).send({
        message: "Error in Login",
        success: false,
        error,
      });
    }
  }  
export default verifyLogin;