import express from 'express'
import { showResponseToClient } from '../utils/responseUtils'
import CategoryHandler from '../controllers/CategoryHandler'
import HttpStatusCode from '../constants/HttpStatusCode'

const route = express.Router()

route.get('/', async (req, res) => {
  const data = {
    status: true,
    message: 'service is running'
  }
  showResponseToClient(null, data, HttpStatusCode.HTTP_SUCCESS, res)
})
route.post('/', async (req, res) => {
  const data = await CategoryHandler.create(req)
  showResponseToClient(null, data, HttpStatusCode.HTTP_SUCCESS, res)
})
route.put('/:categoryId', async (req, res) => {
  const data = {
    status: true,
    message: 'service is running'
  }
  showResponseToClient(null, data, HttpStatusCode.HTTP_SUCCESS, res)
})
route.delete('/:categoryId', async (req, res) => {
  const data = {
    status: true,
    message: 'service is running'
  }
  showResponseToClient(null, data, HttpStatusCode.HTTP_SUCCESS, res)
})
export default route
