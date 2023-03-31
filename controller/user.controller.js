const { response } = require('../app');
const UserService = require('../services/user.services');
const UserModel = require('../model/user.model');
const auth = require('../middleware/auth');
const jwt = require('jsonwebtoken');
exports.register = async(req,res)=>{
    try{
        const {fullName,email,password,contact,address,role} = req.body;

        const successRes = await UserService.registerUser(fullName,email,password,contact,address);

        // res.json({status:true,success: "User Registered Successfully"});
        res.status(200).json({status:true,success: "User Registered Successfully"});
    }catch(e){
        console.log(e);
        res.status(400).json({status:false,success: "Bad Request"});
    
    }
}

exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
    //   const user = await UserService.checkUser(email);
    const user = await UserModel.findOne({email});
  
      if (!user) {
        return res.status(400).json({ status: false, error: 'User does not exist' });
      }
  
      const isMatch = await user.comparePassword(password);
      if (isMatch === false) {
        return res.status(400).json({ status: false, error: 'Invalid password' });
      }
  
      const token = jwt.sign({ id: user._id }, 'passwordKey');
      res.json({token, ...user._doc});
    } catch (error) {
      console.log(error);
      res.status(400).json({ status: false, error: 'Bad Request' });
    }
  };


exports.getUserData = async (req, res) => {
    const user = await UserModel.findById(req.user);
    res.json({ ...user._doc, token: req.token});
}


exports.tokenIsValid =  async (req, res) => {
    try {
      const token = req.header("x-auth-token");
      if (!token) return res.json(false);
      const isVerified = jwt.verify(token, "passwordKey");
      if (!isVerified) return res.json(false);
  
      const user = await UserModel.findById(isVerified.id);
      if (!user) return res.json(false);
      res.json(true);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

exports.uploadProfile = async(req, res)=>{
  try {
    const { email, profile } = req.body;
  
    const user = await UserModel.findOneAndUpdate({email},{profile},{new: true, runValidators: true});
    res.status(200).json({ status: true, success: user });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
  

