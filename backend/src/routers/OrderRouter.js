import express from 'express'
import { showResponseToClient } from '../utils/responseUtils'
import HttpStatusCode from '../constants/HttpStatusCode'
import OrderHandler from '../controllers/OrderHandler'
const route = express.Router()

route.get('/', async (req, res) => {
  const data = await OrderHandler.getList(req)
  showResponseToClient(null, data, HttpStatusCode.HTTP_SUCCESS, res)
})
route.post('/', async (req, res) => {
  const data = await OrderHandler.create(req)
  showResponseToClient(null, data, HttpStatusCode.HTTP_SUCCESS, res)
})
route.put('/:orderId', async (req, res) => {
  const data = {
    status: true,
    message: 'service is running'
  }
  showResponseToClient(null, data, HttpStatusCode.HTTP_SUCCESS, res)
})
route.delete('/:orderId', async (req, res) => {
  const data = {
    status: true,
    message: 'service is running'
  }
  showResponseToClient(null, data, HttpStatusCode.HTTP_SUCCESS, res)
})
export default route
