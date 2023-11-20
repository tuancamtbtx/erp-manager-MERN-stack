import mongoose from 'mongoose'

const { Schema } = mongoose
const InventorySchema = new Schema({
  createdBy: {
    type: String,
    required: true
  },
  productId: {
    type: Schema.ObjectId,
    required: true,
    ref: 'products'
  },
  quantity: {
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

InventorySchema.virtual('id').get(function () {
  return this._id
})

InventorySchema.set('toJSON', { virtuals: true })

export default mongoose.model('inventory', InventorySchema)
