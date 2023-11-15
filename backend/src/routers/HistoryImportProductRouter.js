import express from 'express'
import { showResponseToClient } from '../utils/responseUtils'
import HttpStatusCode from '../constants/HttpStatusCode'
import HistoryImportProductHandler from '../controllers/HistoryImportProductHandler'
const route = express.Router()

route.get('/', async (req, res) => {
  const rs = await HistoryImportProductHandler.create(req)
  console.log(rs)
  const data = {
    status: true,
    message: 'service is running'
  }
  showResponseToClient(null, data, HttpStatusCode.HTTP_SUCCESS, res)
})

export default route
