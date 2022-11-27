const express = require("express");
const errorMiddleware = require("./middlewares/errors");
const app = express();
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());

// Import all the routes here...
const products = require("./routes/product");
const auth = require("./routes/auth");
const order = require("./routes/order");

app.use(`/api/v1`, products);
app.use(`/api/v1`, auth);
app.use(`/api/v1`, order);

// Middleware for Error Handling
app.use(errorMiddleware);

module.exports = app;
