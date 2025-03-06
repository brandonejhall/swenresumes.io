import dotenv from 'dotenv'
import express from 'express'
import supabase from './config/db.js'

dotenv.config()


const app = express()
const port = process.env.PORT ;


//Services
app.get('/', (req, res) => {
  res.send('Hello World!')
})

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