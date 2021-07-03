const express = require("express");
const app = express();
const mongoose = require("mongoose");
const formRouter = require("./routers/formRouter.js");
const otpRouter = require("./routers/otpRouter.js");
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'build')));

//app.enable('trust proxy');

mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/HSAD", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use("/api/otp", otpRouter);
app.use("/api/form", formRouter);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.listen(4000, () => {
  console.log("Server has started...");
});
