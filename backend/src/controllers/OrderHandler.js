import OrderModel from '../models/OrderModel'
import OrderItemModel from '../models/OrderItemModel'
import CustomerModel from '../models/CustomerModel'
import ProductModel from '../models/ProductModel'
import InventoryModel from '../models/InventoryModel'
import OrderStatusCode from '../constants/OrderStatusCode'
import Pagination from '../utils/pagination'
import OrderItemStatusCode from '../constants/OrderItemStatusCode'
const create = async (req) => {
  const body = req.body
  const customerId = body.customerId
  const items = body.items
  const customer = await CustomerModel.findById(customerId)
  if (!customer) {
    throw new Error('Customer not found')
  }
  const orderItemIds = []
  let totalCost = 0
  let revenue = 0
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    const productId = item.productId
    const product = await ProductModel.findById(productId)
    // check inventory
    if (!product) {
      throw new Error('Product not found')
    }
    const inventory = await InventoryModel.findOne({ productId: productId })

    if (!inventory || inventory.quantity < item.quantity) {
      throw new Error(`${product.name} is out of stock`)
    }
    const orderItemBody = {
      productId: productId,
      quantity: item.quantity,
      unitPrice: product.unitPrice,
      discount: product.discount,
      status: OrderItemStatusCode.PENDING
    }
    const discount = product.discount || 0
    totalCost += (product.unitCost * (100 - discount) / 100) * item.quantity
    revenue += (product.unitCost * (100 - discount) / 100 - product.unitPrice) * item.quantity
    const orderItem = await OrderItemModel.create(orderItemBody)
    orderItemIds.push(orderItem._id)
  }
  const amount = totalCost + body.fee
  const bodyOrder = {
    customerId: customerId,
    orderItems: orderItemIds,
    amount: amount,
    fee: body.fee,
    revenue: revenue,
    status: OrderStatusCode.PENDING
  }
  const data = await OrderModel.create(bodyOrder)
  return data
}
const update = async (req) => {
  const id = req.params.orderId
  const body = req.body
  const order = await OrderModel.findById(id)
  if (!order) {
    throw new Error('Order not found')
  }
  const data = await OrderModel.updateOne({ _id: id }, body)
  return data
}
const remove = (req) => {
  const id = req.params.orderId
  return OrderModel.findByIdAndDelete(id)
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
