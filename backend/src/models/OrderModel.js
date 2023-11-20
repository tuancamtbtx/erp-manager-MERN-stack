import mongoose from 'mongoose'

const { Schema } = mongoose
const OrderSchema = new Schema({
  customerId: {
    type: Schema.ObjectId,
    required: true,
    ref: 'customers'
  },
  status: {
    type: Number,
    required: true
  },
  orderItems: [],
  amount: {
    type: Number,
    required: true
  },
  fee: {
    type: Number,
    required: true
  },
  income: {
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

OrderSchema.virtual('id').get(function () {
  return this._id
})

OrderSchema.set('toJSON', { virtuals: true })

export default mongoose.model('orders', OrderSchema)
