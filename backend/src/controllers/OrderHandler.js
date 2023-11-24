import OrderModel from '../models/OrderModel'
import OrderItemModel from '../models/OrderItemModel'
import CustomerModel from '../models/CustomerModel'
import ProductModel from '../models/ProductModel'
import OrderStatusCode from '../constants/OrderStatusCode'
import Pagination from '../utils/pagination'

const create = async (req) => {
  const body = req.body
  const customerId = body.customerId
  const items = body.items
  const customer = await CustomerModel.findById(customerId)
  if (!customer) {
    throw new Error('Customer not found')
  }
  const orderItemIds = []
  let amount = 0
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    const productId = item.productId
    const product = await ProductModel.findById(productId)
    const orderItemBody = {
      productId: productId,
      quantity: item.quantity,
      unitPrice: product.unit_price,
      discount: product.discount
    }
    const discount = product.discount || 0
    amount += (product.unit_price * (100 - discount) / 100) * item.quantity
    const orderItem = await OrderItemModel.create(orderItemBody)
    orderItemIds.push(orderItem._id)
  }
  const bodyOrder = {
    customerId: customerId,
    orderItems: orderItemIds,
    amount: amount,
    fee: body.fee,
    income: 0,
    status: OrderStatusCode.PENDING
  }
  const data = await OrderModel.create(bodyOrder)
  return data
}
const update = (req) => {
  return 'Get Me'
}
const remove = (req) => {
  return 'Logout'
}
const getList = async (req) => {
  const total = await OrderModel.countDocuments({})
  const pageUtil = new Pagination(req, total)
  const data = await OrderModel.aggregate([
    { $match: {} },
    { $unwind: '$orderItems' },
    {
      $lookup: {
        from: 'order_items',
        localField: 'orderItems',
        foreignField: '_id',
        as: 'orderItemObjects'
      }
    },
    { $unwind: '$orderItemObjects' },
    {
      $lookup: {
        from: 'customers',
        localField: 'customerId',
        foreignField: '_id',
        as: 'customer'
      }
    },
    {
      $group: {
        _id: '$_id',
        customer: { $first: '$customer' },
        orderItems: { $push: '$orderItemObjects' },
        amount: { $first: '$amount' },
        fee: { $first: '$fee' },
        income: { $first: '$income' },
        status: { $first: '$status' },
        createdAt: { $first: '$createdAt' },
        updatedAt: { $first: '$updatedAt' }
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
