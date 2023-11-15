import mongoose from 'mongoose'

const { Schema } = mongoose
const OrderSchema = new Schema({
  customer_id: {
    type: String,
    required: true
  },
  product_id: {
    type: String,
    required: true
  },
  quantity: {
    type: int,
    required: true
  },
  price: {
    type: int,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

OrderSchema.virtual('id').get(function () {
  return this._id
})

OrderSchema.set('toJSON', { virtuals: true })

export default mongoose.model('orders', OrderSchema)
