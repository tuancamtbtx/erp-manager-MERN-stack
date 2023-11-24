import CustomerModel from '../models/CustomerModel'
import Pagination from '../utils/pagination'

const create = async (req) => {
  const body = req.body
  const data = await CustomerModel.create(body)
  return data
}
const update = (req) => {
  return 'Get Me'
}
const remove = (req) => {
  return 'Logout'
}
const getList = async (req) => {
  const total = await CustomerModel.countDocuments({})
  const pageUtil = new Pagination(req, total)
  const data = await CustomerModel.find({})
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
