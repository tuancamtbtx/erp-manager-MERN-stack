import express from 'express'
import { showResponseToClient } from '../utils/responseUtils'
import HttpStatusCode from '../constants/HttpStatusCode'
import AdminHandler from '../controllers/AdminHandler'
const route = express.Router()

route.get('/', async (req, res) => {
  try {
    const data = await AdminHandler.getList(req)
    showResponseToClient(null, data, HttpStatusCode.HTTP_SUCCESS, res)
  } catch (err) {
    showResponseToClient(err, null, HttpStatusCode.HTTP_BAD_REQUEST, res)
  }
})
route.post('/', async (req, res) => {
  try {
    const data = await AdminHandler.create(req)
    showResponseToClient(null, data, HttpStatusCode.HTTP_CREATED_SUCCESS, res)
  } catch (err) {
    showResponseToClient(err, null, HttpStatusCode.HTTP_BAD_REQUEST, res)
  }
})

export default route
