import mongoose from 'mongoose'

const { Schema } = mongoose
const CustomerSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  location: {
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

CustomerSchema.virtual('id').get(function () {
  return this._id
})

CustomerSchema.set('toJSON', { virtuals: true })

export default mongoose.model('admin', CustomerSchema)
