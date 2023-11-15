import express from 'express'
import { showResponseToClient } from '../utils/responseUtils'
import HttpStatusCode from '../constants/HttpStatusCode'
import InventoryHandler from '../controllers/InventoryHandler'
const route = express.Router()

route.get('/', async (req, res) => {
  const data = await InventoryHandler.getList(req)
  showResponseToClient(null, data, HttpStatusCode.HTTP_SUCCESS, res)
})
route.post('/', async (req, res) => {
  const data = await InventoryHandler.create(req)
  showResponseToClient(null, data, HttpStatusCode.HTTP_SUCCESS, res)
})
route.put('/:inventoryId', async (req, res) => {
  const data = await InventoryHandler.update(req)
  showResponseToClient(null, data, HttpStatusCode.HTTP_SUCCESS, res)
})
route.delete('/:inventoryId', async (req, res) => {
  const data = await InventoryHandler.remove(req)
  showResponseToClient(null, data, HttpStatusCode.HTTP_SUCCESS, res)
})
export default route
