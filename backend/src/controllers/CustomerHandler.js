import CustomerModel from '../models/CustomerModel'
import Pagination from '../utils/pagination'

const create = async (req) => {
  let body = req.body
  let data = await CustomerModel.create(body)
  return data
}
const update = (req) => {
  return 'Get Me'
}
const remove = (req) => {
  return 'Logout'
}
const getList = async (req) => {
  let total = await CustomerModel.countDocuments({})
  let pageUtil = new Pagination(req, total)
  let data = await CustomerModel.find({})
  .skip(pageUtil.minIndex)
  .limit(pageUtil.itemPerPage)
  return {
    pagination: pageUtil.getPagination(),
    data: data
  }
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
