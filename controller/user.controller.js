const {
  response
} = require("../app");
const UserService = require("../services/user.services");
const UserModel = require("../model/user.model");
const auth = require("../middleware/auth");
const config = require("../config/config");
const jwt = require("jsonwebtoken");
const randomstring = require("randomstring");
const nodemailer = require("nodemailer");
const otpGen = require("otp-generator");
exports.register = async (req, res) => {
  try {
    const {
      fullName,
      email,
      password,
      contact,
      address,
      role
    } = req.body;

    const successRes = await UserService.registerUser(
      fullName,
      email,
      password,
      contact,
      address,
      role
    );
    console.log(
      `User Registered Successfully \n ${JSON.stringify(successRes, null, 2)}`
    );
    res.status(200).json({
      status: true,
      success: "User Registered Successfully",
    });
  } catch (e) {
    console.log(e);
    res.status(400).json({
      status: false,
      success: "Bad Request",
    });
  }
};

exports.login = async (req, res) => {
  try {
    const {
      email,
      password
    } = req.body;

    const user = await UserModel.findOne({
      email,
    });

    if (!user) {
      return res.status(400).json({
        status: false,
        error: "User does not exist",
      });
    }

    const isMatch = await user.comparePassword(password);
    if (isMatch === false) {
      return res.status(400).json({
        status: false,
        error: "Invalid password",
      });
    }

    const token = jwt.sign({
        id: user._id,
      },
      "passwordKey"
    );

    res.json({
      token,
      ...user._doc,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: false,
      error: "Bad Request",
    });
  }
};

exports.getUserData = async (req, res) => {
  const user = await UserModel.findById(req.user);
  res.json({
    ...user._doc,
    token: req.token,
  });
};

exports.tokenIsValid = async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);
    const isVerified = jwt.verify(token, "passwordKey");
    if (!isVerified) return res.json(false);

    const user = await UserModel.findById(isVerified.id);
    if (!user) return res.json(false);
    res.json(true);
  } catch (e) {
    res.status(500).json({
      error: e.message,
    });
  }
};

exports.uploadProfile = async (req, res) => {
  try {
    const {
      email,
      profile
    } = req.body;

    const user = await UserModel.findOneAndUpdate({
      email,
    }, {
      profile,
    }, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: true,
      success: user,
    });
  } catch (e) {
    res.status(500).json({
      error: e.message,
    });
  }
};

exports.forgotPassword = async (req, res) => {
  try {
    const email = req.body.email;
    const userData = await UserModel.findOne({
      email: email,
    });
    if (userData) {
      const otp = otpGen.generate(6, {
        digits: true,
        lowerCaseAlphabets: false,
        upperCaseAlphabets: false,
        specialChars: false,
      });

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: config.email,
          pass: config.password,
        },
      });
      const mailOptions = {
        from: config.email,
        to: email,
        subject: "For Reset Password",
        // text: 'Your OTP is:' + otp
        text: `Hello,\n\nYou have requested to reset your password. Please use the following OTP to proceed:\n\nOTP: ${otp}\n\nIf you didn't initiate this request, you can ignore this email.\n\nBest regards,\nThe Reset Password Team`,
      };

      transporter.sendMail(mailOptions, function (error, infor) {
        if (error) {
          console.log(error);
        } else {
          console.log("mail sent");
          console.log(infor.response);
        }
      });

      res.status(200).send({
        success: true,
        msg: "please check your inbox of your mail and reset.",
        otp: otp,
      });
    } else {
      res.status(200).send({
        success: false,
        msg: "Email doesnt exist",
      });
    }
  } catch (error) {
    res.status(400).send({
      success: false,
      msg: error.message,
    });
  }
};

exports.setNewPass = async (req, res, next) => {
  try {
    const {
      email,
      password
    } = req.body;

    const user = await UserModel.findOneAndUpdate({
      email: email,
    }, {
      password: password,
    }, {
      new: true,
      runValidators: true,
    });
    user.save();

    res.status(200).json({
      status: true,
      msg: "Password changed succesfully.",
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      msg: "Something Went Wrong.",
    });

  }
};