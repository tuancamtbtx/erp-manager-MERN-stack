import ProductModel from '../models/ProductModel'
import Pagination from '../utils/pagination'
import ProductStatusCode from '../constants/ProductStatusCode'
const create = async (req) => {
  const body = req.body
  body.status = ProductStatusCode.ACTIVE
  const data = await ProductModel.create(body)
  return data
}
const update = (req) => {
  return 'Get Me'
}
const remove = (req) => {
  return 'Logout'
}
const getList = async (req) => {
  const total = await ProductModel.countDocuments({})
  const pageUtil = new Pagination(req, total)
  const data = await ProductModel.aggregate([
    { $match: {} },
    {
      $lookup: {
        from: 'categories',
        localField: 'categoryId',
        foreignField: '_id',
        as: 'category'
      }
    },
    { $unwind: '$category' },
    {
      $project: {
        discount: 1,
        category: '$category',
        description: 1,
        weight: 1,
        unitCost: 1,
        unitPrice: 1,
        status: 1,
        createdBy: 1,
        createdAt: 1,
        updatedAt: 1
      }
    },
    { $limit: pageUtil.itemPerPage },
    { $skip: pageUtil.minIndex }
  ])
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
