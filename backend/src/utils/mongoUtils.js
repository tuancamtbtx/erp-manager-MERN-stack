import mongoose from 'mongoose'
import AppConfig from '../configs/AppConfig'

import { logger } from './loggerUtils'

const connect = () => {
  console.log(AppConfig.MONGODB_ADMIN_OPTIONS)
  mongoose.connect(
    AppConfig.MONGODB_ADMIN_OPTIONS.database,
    AppConfig.MONGODB_ADMIN_OPTIONS.db_options
  ).catch(err => {
    if (err) throw err
    logger.info('connect success !!!')
  })
}
const manageConnectDatabase = () => {
  const db = mongoose.connection
  db.on('connecting', () =>
    logger.info('connecting to MongoDB...')
  )
  db.on('error', (error) => {
    logger.error('Error in MongoDb connection: ' + error)
    mongoose.disconnect()
  })
  db.on('connected', () =>
    logger.info('Mongoose default connection open to: ' + AppConfig.MONGODB_ADMIN_OPTIONS.database)
  )
  db.once('open', () =>
    logger.info('MongoDB connection opened!')
  )
  db.on('reconnected', () =>
    logger.info('MongoDB reconnected!')
  )
  db.on('disconnected', async () => {
    logger.info('MongoDB disconnected!')
    connect()
  })
  connect()
  logger.info(`Mongo connection Pooling:
		- Connected: ${db.states.connected}
		- Disconnecting: ${db.states.disconnecting}
		- Disconnected: ${db.states.disconnected}
		`
  )
  process.on('SIGINT', function () {
    mongoose.connection.close(() => {
      logger.info('Mongoose default connection disconnected through app termination')
      process.exit(0)
    })
  })
}
export {
  manageConnectDatabase
}
