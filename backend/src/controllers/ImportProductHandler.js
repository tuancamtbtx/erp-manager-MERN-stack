import ImportProductModel from '../models/ImportProductModel'

const create = async (req) => {
  return await ImportProductModel.create({
    description: 'nhap hang',
    unit_price: 1192992,
    quantity: 10,
    product_id: '5f9e1b9b9b0b3b2a3c3b2a3b'
  })
}
export default {
  create
}
