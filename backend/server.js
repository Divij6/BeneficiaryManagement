import express from 'express'
import cors from 'cors'
import 'dotenv/config'


const app= express()
const port= process.env.PORT || 4000
connectDB()

app.use(express.json())
app.use(cors())
//api endpoints
app.use('/api/user',userRouter)

app.get('/',(req,res)=>{
    res.send('WORKING')
})

app.listen(port, ()=> console.log("server started", port))