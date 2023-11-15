if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const MONGODB_ADMIN_OPTIONS = {
  database: process.env.MONGO_URI,
  db_options: {
    native_parser: true,
    poolSize: 5,
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASSWORD,
    promiseLibrary: global.Promise,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    keepAlive: true
  }
}
module.exports = {
  PORT: process.env.PORT,
  MONGODB_ADMIN_OPTIONS
}
