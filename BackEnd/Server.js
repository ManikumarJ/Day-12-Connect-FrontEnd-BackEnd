import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import DBconnect from './config/db.js'
import movieRoute from './routes/userRoute.js'


dotenv.config()

DBconnect()
const PORT = process.env.PORT || 3000

const student = express()

student.use(cors())
student.use(express.json())
student.use("/api/student",movieRoute)

student.listen(PORT,()=>{
    console.log(`Server is On : http://localhost:${PORT}`);
})

//  http://localhost:5000/api/student