import express from 'express'
import bodyParser from 'body-parser'

import AppConfig from './src/configs/AppConfig'
import RouterUtils from './src/utils/routerUtils'
import Routers from './src/routers'

import { error404Forwarder, errorDebugMiddleware, errorReleaseMiddleware } from './src/middlewares/errorMiddlerware'
import corsMiddleware from './src/middlewares/corsMiddleware'
import { logger } from './src/utils/loggerUtils'
import { manageConnectDatabase } from './src/utils/mongoUtils'
const app = express()

manageConnectDatabase()
// Allow maximum data upload up to 50 MBytes
app.use(bodyParser.json({ limit: '50mb' }))
// Allow maximum data upload up to 50 MBytes
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))

app.use(corsMiddleware)

const configNameSpace = {
  siteNameSpace: RouterUtils.withNamespace(app, 'site')
}
configNameSpace.siteNameSpace(
  RouterUtils.mapping('/admin', Routers.AdminRouter),
  RouterUtils.mapping('/imports', Routers.ImportProductRouter),
  RouterUtils.mapping('/products', Routers.ProductRouter),
  RouterUtils.mapping('/categories', Routers.CategoryRouter),
  RouterUtils.mapping('/orders', Routers.OrderRouter),
  RouterUtils.mapping('/inventories', Routers.InventoryRouter),
  RouterUtils.mapping('/customers', Routers.CustomerRouter),


)
app.use(error404Forwarder)

app.listen(AppConfig.PORT, () => {
  logger.info(`App listening !! Start APIs- port:  ${AppConfig.PORT}`)
})
