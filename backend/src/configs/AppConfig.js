if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const MONGODB_ADMIN_OPTIONS = {
  database: process.env.MONGO_URI,
  db_options: {
    // native_parser: true,
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASSWORD
  }
}
export default {
  PORT: process.env.PORT,
  MONGODB_ADMIN_OPTIONS
}
