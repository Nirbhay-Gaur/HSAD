const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const Form = require("../models/formModel.js");
const { checkOTP } = require("../otp/otp.js");

const formRouter = express.Router();

formRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    res.send("this is form router");
  })
);

formRouter.post(
  "/",
  checkOTP,
  expressAsyncHandler(async (req, res) => {
    const formData = new Form({
      name: req.body.name,
      email: req.body.email,
      mobile: req.body.mobile,
      otp: req.body.otp,
      state: req.body.state,
      city: req.body.city,
      pincode: req.body.pincode,
      product: req.body.product,
    });
    await formData.save((err) => {
      if (err) {
        res.status(500).send({ message: err.message });
      } else {
        res.status(200).send({ message: `Your unique ID is ${formData._id}` });
      }
    });
  })
);

formRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const data = await Form.findById(req.params.id);
    if (data) {
      res.send({
        name: data.name,
        mobile: data.mobile,
        email: data.email,
        product: data.product,
      });
    } else {
      res.status(404).send({ message: "Data Not Found" });
    }
  })
);

module.exports = formRouter;
