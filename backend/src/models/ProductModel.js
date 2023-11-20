import mongoose from 'mongoose'

const { Schema } = mongoose
const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  },
  categoryId: {
    type: Schema.ObjectId,
    required: true,
    ref: 'categories'
  },
  discount: {
    type: Number,
    default: 0
  },
  description: {
    type: String
  },
  weight: {
    type: Number
  },
  unitCost: {
    type: Number,
    required: true
  },
  unitPrice: {
    type: Number,
    required: true
  },
  status: {
    type: Number,
    required: true
  },
  createdBy: {
    type: String,
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

ProductSchema.virtual('id').get(function () {
  return this._id
})

ProductSchema.set('toJSON', { virtuals: true })

export default mongoose.model('product', ProductSchema)
