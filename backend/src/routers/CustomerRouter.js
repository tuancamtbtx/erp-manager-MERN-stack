import express from 'express'
import { showResponseToClient } from '../utils/responseUtils'
import HttpStatusCode from '../constants/HttpStatusCode'
import CustomerHandler from '../controllers/CustomerHandler'
const route = express.Router()

route.get('/', async (req, res) => {
  const data = await CustomerHandler.getList(req)
  showResponseToClient(null, data, HttpStatusCode.HTTP_SUCCESS, res)
})
route.post('/', async (req, res) => {
  const data = await CustomerHandler.create(req)
  showResponseToClient(null, data, HttpStatusCode.HTTP_CREATED_SUCCESS, res)
})
export default route
