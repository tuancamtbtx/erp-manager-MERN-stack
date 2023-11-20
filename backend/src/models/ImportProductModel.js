import mongoose from 'mongoose'

const { Schema } = mongoose

const ImportProductSchema = new Schema({
  product_id: {
    type: Schema.ObjectId,
    required: true,
    ref: 'product'
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

ImportProductSchema.virtual('id').get(function () {
  return this._id
})

ImportProductSchema.set('toJSON', { virtuals: true })

export default mongoose.model('import_product', ImportProductSchema)
