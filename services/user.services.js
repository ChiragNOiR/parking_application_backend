const UserModel = require('../model/user.model');
const jwt = require('jsonwebtoken')
class UserService{
    static async registerUser(fullName,email,password,contact,address,role){
        try{
            const createUser = new UserModel({fullName,email,password,contact,address,role});
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

    
    
}

module.exports = UserService;