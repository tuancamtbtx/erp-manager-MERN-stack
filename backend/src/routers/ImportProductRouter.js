import express from 'express'
import { showResponseToClient } from '../utils/responseUtils'
import HttpStatusCode from '../constants/HttpStatusCode'
import ImportProductHandler from '../controllers/ImportProductHandler'
const route = express.Router()

route.get('/', async (req, res) => {
  const rs = await ImportProductHandler.get(req)
  console.log(rs)
  const data = {
    status: true,
    message: 'currently not supported'
  }
  showResponseToClient(null, data, HttpStatusCode.HTTP_SUCCESS, res)
})
route.post('/', async (req, res) => {
  const data = await ImportProductHandler.create(req)
  showResponseToClient(null, data, HttpStatusCode.HTTP_SUCCESS, res)
})
export default route
