import mongoose from 'mongoose'

const { Schema } = mongoose
const CategorySchema = new Schema({
  name: {
    type: String,
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

CategorySchema.virtual('id').get(function () {
  return this._id
})

CategorySchema.set('toJSON', { virtuals: true })

export default mongoose.model('category', CategorySchema)
