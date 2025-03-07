import dotenv from 'dotenv'
import express from 'express'
import supabase from './config/db.js'
import cookieParser from 'cookie-parser'
import checkForPreviousAnon from './middleware/authMiddleware.js'

dotenv.config()


const app = express()

app.use(cookieParser())
app.use(express.json())// JSON body parser

const port = process.env.PORT ;


//Services
app.get("/start", checkForPreviousAnon, (req, res) => {
  res.json({
    message: "Anonymous session active",
    anonUserId: req.user.id, // Available after middleware
  });
});

app.get('/users', async (_, res) => {
  const { data, error } = await supabase
  .schema('swenresumes_auth')
  .from('users')
  .select('*')
  if (error) {
    return res.status(500).json({ error: error.message })
  }
  res.status(200).json(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})