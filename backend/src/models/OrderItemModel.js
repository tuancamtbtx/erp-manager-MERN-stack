import mongoose from 'mongoose'

const { Schema } = mongoose
const OrderItemSchema = new Schema({
  productId: {
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
  unitPrice: {
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

OrderItemSchema.set('toJSON', { virtuals: true })

export default mongoose.model('order_items', OrderItemSchema)
