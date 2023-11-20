import mongoose from 'mongoose'

const { Schema } = mongoose
const AdminSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
  },
  password: {
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

AdminSchema.virtual('id').get(function () {
  return this._id
})

AdminSchema.set('toJSON', { virtuals: true })

export default mongoose.model('admin', AdminSchema)
