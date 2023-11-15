import express from 'express'
import AppConfig from './src/configs/AppConfig'
const app = express()
// Allow maximum data upload up to 50 MBytes
app.use(bodyParser.json({ limit: '50mb' }))
// Allow maximum data upload up to 50 MBytes
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))

app.listen(AppConfig.PORT, () => {
  logger.info(`App listening !! Start APIs- port:  ${config.PORT}`)
})
