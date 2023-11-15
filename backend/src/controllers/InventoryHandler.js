import InventoryModel  from "../models/InventoryModel"
const create = async (req) => {
    let body = req.body
    let data = await InventoryModel.create(body)
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
