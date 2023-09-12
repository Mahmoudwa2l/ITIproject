const express = require("express");

const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const beatRoute = require("./routes/beats");

dotenv.config();
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Handling the connection events
const db = mongoose.connection;

db.on("error", (err) => {
  console.error("Mongoose connection error:", err);
});

db.once("open", () => {
  console.log("Connected to MongoDB using Mongoose");
});

db.on("disconnected", () => {
  console.log("Mongoose disconnected from MongoDB");
});



//midelware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users" , userRoute);
app.use("/api/auth" , authRoute);
app.use("/api/beats" , beatRoute);

app.listen(8800, () => {
  console.log("backend server is running!");
});
