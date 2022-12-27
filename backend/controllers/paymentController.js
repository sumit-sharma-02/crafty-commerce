const catchAsyncError = require("../middlewares/catchAsyncErrors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// Process stripe payments => /api/v1/payment/process
exports.processPayment = catchAsyncError(async (req, res, next) => {
  const customer = await stripe.customers.create({
    name: req.body.customerDetails.fullName,
    address: {
      line1: req.body.customerDetails.addressLine1,
      line2: req.body.customerDetails.addressLine2,
      postal_code: req.body.customerDetails.postalCode,
      city: req.body.customerDetails.city,
      country: req.body.customerDetails.country,
    },
    shipping: {
      name: req.body.customerDetails.fullName,
      address: {
        line1: req.body.customerDetails.addressLine1,
        line2: req.body.customerDetails.addressLine2,
        postal_code: req.body.customerDetails.postalCode,
        city: req.body.customerDetails.city,
        country: req.body.customerDetails.country,
      },
    },
  });

  const paymentIntent = await stripe.paymentIntents.create({
    amount: req.body.amount,
    customer: customer.id,
    shipping: {
      name: req.body.customerDetails.fullName,
      address: {
        line1: req.body.customerDetails.addressLine1,
        line2: req.body.customerDetails.addressLine2,
        postal_code: req.body.customerDetails.postalCode,
        city: req.body.customerDetails.city,
        country: req.body.customerDetails.country,
      },
    },
    description: req.body.description,
    currency:
      req.body.customerDetails.country.toLowerCase() === "india"
        ? "inr"
        : "usd",
    metadata: { intergation_check: "accept_a_payment" },
  });

  res.status(200).json({
    success: true,
    client_secret: paymentIntent.client_secret,
  });
});

// Send stripe API Key => /api/v1/stripe
exports.sendStripeApi = catchAsyncError(async (req, res, next) => {
  res.status(200).json({
    stripeApiKey: process.env.STRIPE_API_KEY,
  });
});
