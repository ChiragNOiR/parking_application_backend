const UserModel = require('../model/user.model');
const jwt = require('jsonwebtoken')
class UserService{
    static async registerUser(fullName,email,password,contact,address){
        try{
            const createUser = new UserModel({fullName,email,password,contact,address});
            return await createUser.save();
        }catch(e){
            throw e;
        }
    }

    static async checkUser(email){
        try{
            return await UserModel.findOne({email});
        }catch(e){
            throw e;
        }
    }
    static async getUserDetails(userId){
        try{
            const userData = await UserModel.find({userId});
            return userData;
        }catch(e){
            throw e;
        }
    }

    static async generateToken(tokenData,secretKey,jwt_expire){
        return jwt.sign(tokenData,secretKey,{expiresIn:jwt_expire});
    }
}

module.exports = UserService;