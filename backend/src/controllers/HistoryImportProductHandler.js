import HistoryImportProductModel from '../models/HistoryImportModel'

const create = async (req) => {
  let productList = req.body.productList
  productList = [{
    product_id: '5f7c7a2c8c9d440000f6e2f3',
    quantity: 10,
    unit_price: 1192992

  },
  {
    product_id: '5f7c7a2c8c9d440000f6e2f4',
    quantity: 10,
    unit_price: 1192992
  }
  ]
  return await HistoryImportProductModel.create({
    description: 'nhap hang',
  })
}
export default {
  create
}
