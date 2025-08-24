import userModel from '../models/userModel.js';

export const updateBeneficiary = async function(req,res){
    try{
        const userId = req.user._id
        const updateData = req.body;

        const updateUser = await userModel.findByIdAndUpdate(userId,updateData,
            {
            new: true,
            runValidators: true
        })
        
        res.json({
        success: true,
        message: 'Profile updated Successfully!',
        data: updateUser
        })
    }
    catch(error)
    {
        console.error("something went wrong")
        res.json({
            success: false,
            message: "Error"
        })
    }

}