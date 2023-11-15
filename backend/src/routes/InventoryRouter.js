import express from 'express'
import { showResponseToClient } from '@mlplatform/brain/utils/responseUtils'

const route = express.Router()

route.get('/', async (req, res) => {
  const data = {
    status: true,
    message: 'service is running'
  }
  showResponseToClient(null, data, HttpStatusCode.HTTP_SUCCESS, res)
})

export default route
