import express from 'express'
import registerUser from '../controllers/userController.js'
import { getUsers, getUserById, deleteUser } from "../controllers/getController.js";

const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.get("/", getUsers);            
userRouter.get("/:id", getUserById);       
userRouter.delete("/:id", deleteUser); 

export default userRouter