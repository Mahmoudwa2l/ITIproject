const express = require("express");

const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const beatRoute = require("./routes/beats");
const cartRoute = require("./routes/cart");
const multer = require("multer");
const path = require("path");

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

app.use("/images" , express.static(path.join(__dirname, "public/images")));

//midelware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
  destination: (req,file,cb)=>{
    cb(null,"public/images");
  },
  filename: (req,file,cb) =>{
    cb(null,file.originalname);
  }
});
const upload = multer({storage});
app.post("/api/upload",upload.single("file") , (req,res) =>{
  try{
    return res.status(200).json("File uploaded successfully");

  }catch(err){
    console.log(err);
  }
});

app.use("/api/users" , userRoute);
app.use("/api/auth" , authRoute);
app.use("/api/beats" , beatRoute);
app.use("/api/cart" , cartRoute);



app.listen(8800, () => {
  console.log("backend server is running!");
});
