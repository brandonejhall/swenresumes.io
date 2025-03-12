import dotenv from 'dotenv'
import express from 'express'
import supabase from './config/db.js'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/authRoutes.js'
import resumeRoutes from './routes/resumeRoutes.js'

dotenv.config()

const app = express()

app.use(cookieParser())




//Routes
app.use('/api/auth',authRoutes); 
app.use('/api/resumes',resumeRoutes)


app.get('/',(req,res) => {
  res.send('Hello World!')
})


const port = process.env.PORT ;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})