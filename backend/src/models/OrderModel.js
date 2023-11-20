import mongoose from 'mongoose'

const { Schema } = mongoose
const OrderSchema = new Schema({
  customer_id: {
    type: Schema.ObjectId,
    required: true,
    ref: 'customers'
  },
  status: {
    type: Number,
    required: true
  },
  orderItems: [
    {
      id: {
        type: Schema.ObjectId,
        required: true,
        ref: 'order_items'
      }
    }
  ],
  amount: {
    type: Number,
    required: true
  },
  profit: {
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
