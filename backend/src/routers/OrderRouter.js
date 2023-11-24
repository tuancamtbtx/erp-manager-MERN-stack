import express from 'express'
import { showResponseToClient } from '../utils/responseUtils'
import HttpStatusCode from '../constants/HttpStatusCode'
import OrderHandler from '../controllers/OrderHandler'
const route = express.Router()

route.get('/', async (req, res) => {
  try {
    const data = await OrderHandler.getList(req)
    showResponseToClient(null, data, HttpStatusCode.HTTP_SUCCESS, res)
  } catch (err) {
    showResponseToClient(err, null, HttpStatusCode.HTTP_BAD_REQUEST, res)
  }
})
route.post('/', async (req, res) => {
  try {
    const data = await OrderHandler.create(req)
    showResponseToClient(null, data, HttpStatusCode.HTTP_SUCCESS, res)
  } catch (err) {
    showResponseToClient(err, null, HttpStatusCode.HTTP_BAD_REQUEST, res)
  }
})
route.put('/:orderId', async (req, res) => {
  const data = {
    status: true,
    message: 'currently not supported'
  }
  showResponseToClient(null, data, HttpStatusCode.HTTP_SUCCESS, res)
})
route.delete('/:orderId', async (req, res) => {
  const data = {
    status: true,
    message: 'currently not supported'
  }
  showResponseToClient(null, data, HttpStatusCode.HTTP_SUCCESS, res)
})
export default route
