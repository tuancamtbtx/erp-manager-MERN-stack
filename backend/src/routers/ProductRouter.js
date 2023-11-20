import express from 'express'
import { showResponseToClient } from '../utils/responseUtils'
import ProductHandler from '../controllers/ProductHandler'
import HttpStatusCode from '../constants/HttpStatusCode'

const route = express.Router()

route.get('/', async (req, res) => {
  const data = await ProductHandler.getList(req)
  showResponseToClient(null, data, HttpStatusCode.HTTP_SUCCESS, res)
})
route.post('/', async (req, res) => {
  const data = await ProductHandler.create(req)
  showResponseToClient(null, data, HttpStatusCode.HTTP_CREATED_SUCCESS, res)
})
route.put('/:productId', async (req, res) => {
  const data = {
    status: true,
    message: 'service is running'
  }
  showResponseToClient(null, data, HttpStatusCode.HTTP_SUCCESS, res)
})
route.delete('/:productId', async (req, res) => {
  const data = {
    status: true,
    message: 'service is running'
  }
  showResponseToClient(null, data, HttpStatusCode.HTTP_SUCCESS, res)
})
export default route
