import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import validator from "validator";
const registerUser = async(req, res) =>{
    try{
        const {name,email,password,phone,city,state} = req.body;

        if(!name || !password || !email){
            return res.json({
                success:false, message:"Missing "
            })
        }
        if(!validator.isEmail(email)){
            return res.json({success:false, message:"invalid Email"});
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const userData = {
            name,
            email,
            phone: phone || "0000000000",
            password: hashedPassword,
            address: {
                city: city || "", 
                state: state || "",
            },
        };

        const newUser = new userModel(userData);
        const user = await newUser.save();

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET,{
            expiresIn:"7d",
        });
        res.json({success:true, token});
    }catch(error){
        console.error(error);
        res.json({success:false, message:error.message});
    }
};
export default registerUser;

