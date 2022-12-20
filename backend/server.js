const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");
const cloudinary = require("cloudinary");

// Handle Uncaught exceptions
process.on("uncaughtException", (err) => {
  console.error(`\u001b[1;31m ERROR: ${err.message}`);
  console.error(`\u001b[1;31m Stack: ${err.stack}`);
  console.error(
    `\u001b[1;31m Shutting down the server due to uncaught exception`
  );
  process.exit(1);
});

// Setting up config file
dotenv.config({ path: "backend/config/config.env" });

// Connecting to database
connectDatabase();

// Setting up  cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode`
  );
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.error(`\u001b[1;31m ERROR: ${err.message}`);
  console.error(
    `\u001b[1;31m Shutting down the server due to unhandled promise rejection`
  );
  server.close(() => {
    process.exit(1);
  });
});
