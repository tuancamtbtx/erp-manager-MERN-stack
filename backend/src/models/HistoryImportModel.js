import mongoose from 'mongoose'

const { Schema } = mongoose

const HistoryImportProductSchema = new Schema({
  product_id: {
    type: Schema.ObjectId,
    required: true,
    ref: 'product'
  },
  quantity: {
    type: Number,
    required: true
  },
  amount: {
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

HistoryImportProductSchema.virtual('id').get(function () {
  return this._id
})

HistoryImportProductSchema.set('toJSON', { virtuals: true })

export default mongoose.model('history_import_product', HistoryImportProductSchema)
