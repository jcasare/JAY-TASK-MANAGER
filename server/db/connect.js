const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server')

// const connectDB = (url) => {
//   return mongoose.connect(url, {
//     autoIndex: false,
//     serverSelectionTimeoutMS: 10000,
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//   })
// }

const connectDB = async () => {
  const mongo = await MongoMemoryServer.create()
  const getUri = mongo.getUri()
  mongoose.set('strictQuery', true)
  const db = await mongoose.connect(getUri)
  // return getUri
  return db
}
module.exports = connectDB
