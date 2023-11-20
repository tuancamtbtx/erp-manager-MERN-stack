import InventoryModel from '../models/InventoryModel'
import ProductModel from '../models/ProductModel'
import Pagination from '../utils/pagination'

const create = async (req) => {
  const body = req.body
  const productId = body.productId
  const product = await ProductModel.findById(productId)
  if(!product) {
    throw new Error('Product not found')
  }
  const data = await InventoryModel.create(body)
  return data
}
const update = (req) => {
  return 'Get Me'
}
const remove = (req) => {
  return 'Logout'
}
const getList = async (req) => {
  let total = await InventoryModel.countDocuments({})
  let pageUtil = new Pagination(req, total)
  let data = await InventoryModel.aggregate([
    {$match: {}},
    {
      $lookup: {
        from: 'products',
        localField: 'productId',
        foreignField: '_id',
        as: 'product'
      }
    },
    {$limit: pageUtil.itemPerPage},
    {$skip: pageUtil.minIndex}
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
