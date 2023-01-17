const Order = require("../models/order");
const Product = require("../models/product");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const APIFeatures = require("../utils/apiFeatures");

// Create a new Order => /api/v1/order/new
exports.newOrder = catchAsyncErrors(async (req, res, next) => {
  const {
    orderItems,
    shippingInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    paymentInfo,
  } = req.body;

  const order = await Order.create({
    orderItems,
    shippingInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    paymentInfo,
    paidAt: Date.now(),
    user: req.user._id,
  });

  res.status(200).json({
    success: true,
    order,
  });
});

// Get Single Order => /api/v1/order/:id
exports.getSingleOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );
  if (!order) {
    return next(new ErrorHandler(`No Order found!`, 404));
  }

  res.status(200).json({
    success: true,
    order,
  });
});

// Get Logged in User Orders => /api/v1/orders/myOrders?page=1
exports.getMyOrders = catchAsyncErrors(async (req, res, next) => {
  const ordersPerPage = 3;
  const orders = await Order.find({ user: req.user.id });
  const ordersCount = await Order.countDocuments();
  const apiFeatures = new APIFeatures(
    Order.find({ user: req.user.id }),
    req.query
  ).filter();

  let filteredOrder = await apiFeatures.query;
  let filteredOrderCount = filteredOrder.length;

  apiFeatures.pagination(ordersPerPage);
  filteredOrder = await apiFeatures.query.clone();

  res.status(200).json({
    success: true,
    orders,
    ordersPerPage,
    ordersCount,
    filteredOrder,
    filteredOrderCount,
  });
});

// ---------------------------Admin Routes-----------------------------

// Get All Orders => /api/v1/admin/orders
exports.getAllOrders = catchAsyncErrors(async (req, res, next) => {
  const resPerPage = 5;
  const ordersCount = await Order.countDocuments();
  const apiFeatures = new APIFeatures(Order.find(), req.query);

  let orders = await apiFeatures.query;
  let filteredOrdersCount = orders.length;

  apiFeatures.pagination(resPerPage);
  orders = await apiFeatures.query.clone();

  let totalAmount = 0;
  orders.forEach((order) => {
    totalAmount += order.totalPrice;
  });

  res.status(200).json({
    success: true,
    resPerPage,
    ordersCount,
    filteredOrdersCount,
    totalAmount,
    orders,
  });
});

// Update/Process Orders => /api/v1/admin/order/:id
exports.updateOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.findById(req.params.id);
  if (order.orderStatus === "Delivered") {
    return next(new ErrorHandler(`This Order has already been delivered`, 400));
  }

  order.orderItems.forEach(async (item) => {
    await updateStock(item.product, item.quantity);
  });

  (order.orderStatus = req.body.status), (order.deliveredAt = Date.now());
  await order.save();

  res.status(200).json({
    success: true,
    order,
  });
});

// Update the stock of the product if it gets delivered
async function updateStock(productId, productQuantity) {
  const product = await Product.findById(productId);
  product.stock = product.stock - productQuantity;
  await product.save({ validateBeforeSave: false });
}

// Delete Order => /api/v1/admin/order/:id
exports.deleteOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.findById(req.params.id);
  if (!order) {
    return next(new ErrorHandler(`No Order found!`, 404));
  }

  await order.remove();

  res.status(200).json({
    success: true,
    message: "The Order has been deleted successfully",
  });
});
