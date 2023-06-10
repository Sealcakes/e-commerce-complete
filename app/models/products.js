import mongoose from 'mongoose';


const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  }
})

export const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);
