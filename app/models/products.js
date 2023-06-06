import mongoose from 'mongoose';


const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  imageUrl: {
    type: String,
  },
  price: {
    type: Number,
    trim: true,
  }
})

export const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);
