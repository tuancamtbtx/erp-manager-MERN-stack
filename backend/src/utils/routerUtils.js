/*
* @author vantuan_tbtx
*/
import { logger } from './loggerUtils'

const buildRoute = (app, namespace, mapping) => {
  const url = `/${namespace}${mapping.givenPath}`
  logger.info(`Building api router ${url}`)
  app.use(`${url}`, mapping.handler)
}

const withNamespace = (app, namespace) => (...funcs) => {
  logger.info(`Building list api routes [${namespace}]/*`)
  funcs.forEach(func => {
    buildRoute(app, namespace, func)
  })
}
const mapping = (givenPath, handler) => {
  if (!givenPath) throw new Error('You need to set a valid path')
  if (!handler) throw new Error('You need to set a valid handler')
  return {
    givenPath,
    handler
  }
}
export default {
  withNamespace,
  mapping
}
