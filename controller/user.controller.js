const { response } = require('../app');
const UserService = require('../services/user.services');
const UserModel = require('../model/user.model');

exports.register = async(req,res)=>{
    try{
        const {fullName,email,password,contact,address} = req.body;

        const successRes = await UserService.registerUser(fullName,email,password,contact,address);

        // res.json({status:true,success: "User Registered Successfully"});
        res.status(200).json({status:true,success: "User Registered Successfully"});
    }catch(e){
        console.log(e);
        res.status(400).json({status:false,success: "Bad Request"});
    
    }
}

exports.login = async(req,res)=>{
    try{
        console.log('test');
        const {email,password} = req.body;
        
       const user = await UserService.checkUser(email);

       if(!user){
        throw new Error('User doesn\'t exist');
       }

       const isMatch = await user.comparePassword(password);
       if(isMatch == false){
        throw new Error('Invalid Password!!');
       }

       let tokenData = {_id:user._id, email:user.email};
       const token = await UserService.generateToken(tokenData,"secretKey",'1h')

       res.status(200).json({status:true,token:token});
    }catch(e){
        res.status(400).json({status:false,success: "Bad Request"});
    }
}

exports.getUserDetails = async(req,res) => {
    try{
        const {userId} = req.body;
        let successGetUserDetails = await UserService.getUserDetails(userId);
        res.status(200).json({status:true,success: successGetUserDetails});
    }catch(e){
        console.log(e);
        res.status(400).json({status:false,success: "Bad Request"});
    }
}
