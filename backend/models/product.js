const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide the product name"],
    trim: true,
    maxLength: [500, "Product name mustn't exceed 100 characters"],
  },
  price: {
    type: Number,
    maxLength: [5, "Product price mustn't exceed 5 digit"],
    default: 0.0,
  },
  description: {
    type: String,
    required: [true, "Please provide some product description"],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please provide any category"],
    enum: {
      values: [
        "Clothing",
        "Gadgets",
        "Kitchen",
        "Smartphones",
        "Laptops",
        "Watches",
        "Accessories",
        "Gifts, Sports and Toys",
        "Home and Furniture",
        "Best Selling",
        "Featured",
        "New Arrivals",
        "Top Reviewed",
      ],
      message: "Please provide a valid category",
    },
  },
  seller: {
    type: String,
    required: [true, "Please provide the seller name"],
  },
  stock: {
    type: Number,
    required: [true, "Please provide the stock for the product"],
    maxLength: [5, "Product stock mustn't exceed 5 characters"],
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
