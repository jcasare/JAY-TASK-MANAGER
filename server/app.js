const express = require('express')
require('dotenv').config()
require('express-async-errors')
const connectDB = require('./db/connect')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const port = process.env.PORT || 8000
const tasksRouter = require('./routes/tasks')
const notFound = require('./middleware/notFound')
const errorHandler = require('./middleware/errorHandler')

app.set('trust proxy', 1)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use(morgan('tiny'))
app.disable('x-powered-by') //prevents attackers from seeing framework used

app.get('/', (req, res) => {
  res.send('TaskQuake API')
})

app.use('/api/v1/tasks', tasksRouter)

app.use(notFound)
app.use(errorHandler)

const spinServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`)
    })
  } catch (error) {
    console.log(error)
  }
}
spinServer()
