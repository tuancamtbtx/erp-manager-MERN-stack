import mongoose from 'mongoose'

const { Schema } = mongoose
const AdminSchema = new Schema({
  product_id: {
    type: String,
    required: true
  },
  stock: {
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

AdminSchema.virtual('id').get(function () {
  return this._id
})

UserSchema.set('toJSON', { virtuals: true })

export default mongoose.model('admin', AdminSchema)
