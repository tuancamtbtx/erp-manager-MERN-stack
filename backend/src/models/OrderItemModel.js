import mongoose from 'mongoose'

const { Schema } = mongoose
const OrderItemSchema = new Schema({
  order_id: {
    type: Schema.ObjectId,
    required: true,
    ref: 'orders'
  },
  product_id: {
    type: Schema.ObjectId,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  discount: {
    type: Number
  },
  unit_cost: {
    type: Number,
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

OrderItemSchema.virtual('id').get(function () {
  return this._id
})

OrderSchema.set('toJSON', { virtuals: true })

export default mongoose.model('order_items', OrderItemSchema)
