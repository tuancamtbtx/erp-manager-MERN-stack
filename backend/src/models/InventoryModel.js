import mongoose from 'mongoose'

const { Schema } = mongoose
const InventorySchema = new Schema({
    name: {
        type: "String",
        required: true
    },
  createdBy: {
    type: String,
    required: true
  },
  productId: {
    type: Schema.ObjectId,
    required: true,
    ref: 'product'
  },
  categoryId: {
    type: Schema.ObjectId,
    required: true,
    ref: 'category'
  },
  quantity: {
    type: Number,
    required: true
  },
    unitPrice: {
        type: Number,
        required: true
    },
  description: {
    type: String
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
