import OrderHandlerModel from '../models/OrderHandlerModel'
import OrderItemModel from '../models/OrderItemModel'
const create = async (req) => {
  const body = req.body
  const data = await ProductModel.create(body)
  return data
}
const update = (req) => {
  return 'Get Me'
}
const remove = (req) => {
  return 'Logout'
}
const getList = (req) => {
  return 'Logout'
}
const getDetail = (req) => {
  return 'Logout'
}
export default {
  create,
  update,
  remove,
  getList,
  getDetail
}
