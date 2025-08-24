import express from 'express'
import registerUser from '../controllers/userController.js'
import verifyLogin from '../controllers/verifyLogin.js'
const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', verifyLogin)
export default userRouter