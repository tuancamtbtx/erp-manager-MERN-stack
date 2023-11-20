import mongoose from 'mongoose'

const { Schema } = mongoose

const CustomerSchema = new Schema({
  fullname: {
    type: String,
    required: true
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
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

export default mongoose.model('customers', CustomerSchema)
