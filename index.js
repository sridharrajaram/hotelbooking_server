const express = require("express");
const app = express();

require("dotenv").config();

const cors = require("cors");

const mongoose = require("mongoose"); 
const bodyParser = require("body-parser");

const customerRouter = require("./routes/customers");
const roomsRouter = require("./routes/rooms");

const PORT = process.env.PORT || 8080;

//middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//connecting to DB
const DB_URL = process.env.MONGODB_HOST;
mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.on("connected", () => {
  console.log("MongoDB Connected");
});

connection.on("error", (err) => {
  console.error("error in connecting", err);
});

//Routes
app.use("/customers", customerRouter);
app.use("/rooms", roomsRouter);

//start server
app.listen(PORT, () => {
  console.log(`server started running on port:${PORT}`);
});
