import CategoryModel from '../models/CategoryModel'
import Pagination from '../utils/pagination'

const create = async (req) => {
  const body = req.body
  body.createdBy = 'Tuan Cam'
  const data = await CategoryModel.create(body)
  return data
}
const update = (req) => {
  return 'Get Me'
}
const remove = (req) => {
  return 'Logout'
}
const getList = async (req) => {
  const total = await CategoryModel.countDocuments({})
  const pageUtil = new Pagination(req, total)
  const data = await CategoryModel.find({})
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
