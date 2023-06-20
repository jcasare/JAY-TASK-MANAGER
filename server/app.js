const express = require('express')
require('dotenv').config()
require('express-async-errors')
const connectDB = require('./db/connect')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const port = process.env.PORT || 8000
const tasksRouter = require('./routes/tasks')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(morgan('tiny'))
app.disable('x-powered-by') //prevents attackers from seeing framework used

// app.listen(port, () => {
//   console.log(`server listening on port ${port}...`)
// })
//DB connection
app.get('/', (req, res) => {
  res.send('Welcome')
})

app.use('/api/v1/tasks', tasksRouter)
connectDB()
  .then(() => {
    try {
      app.listen(8000, () => {
        console.log(`server is listening on port ${port}...`)
      })
    } catch (error) {
      console.log(error)
    }
  })
  .catch((err) => console.log('Cannot connect to DB'))
