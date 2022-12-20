const express = require("express");
const errorMiddleware = require("./middlewares/errors");
const app = express();

const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());

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
