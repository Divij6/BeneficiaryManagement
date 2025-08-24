import express from 'express'
import registerUser from '../controllers/userController.js'
import verifyLogin from '../controllers/verifyLogin.js'
import { updateBeneficiary } from '../controllers/UpdateProfile.js'
import { getUserById } from '../controllers/getController.js'
const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', verifyLogin)
userRouter.put('/:id', updateBeneficiary)
userRouter.get('/:id', getUserById)
export default userRouter