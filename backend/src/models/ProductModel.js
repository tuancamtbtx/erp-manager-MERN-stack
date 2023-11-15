import mongoose from 'mongoose'

const { Schema } = mongoose
const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  category_id: {
    type: String,
    required: true
  },
  description:{
    type: String,
  },
  price: {
    type: int,
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
