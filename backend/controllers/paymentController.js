const catchAsyncError = require("../middlewares/catchAsyncErrorss");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// Process stripe payments => /api/v1/payment/process
exports.processPayment = catchAsyncError(async (req, res, next) => {
  const paymentIntent = await stripe.paymentIntent.create({
    amount: req.body.amount,
    currency: "usd",
    metadata: { intergation_check: "accept_a_payment" },
  });

  res.status(200).json({
    success: true,
    client_Secret: paymentIntent.client_Secret,
  });
});
