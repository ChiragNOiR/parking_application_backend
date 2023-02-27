const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const db = require('../config/db');
const { use } = require('../app');

const { Schema } = mongoose;

const userSchema = new Schema({
    email:{
        type:String,
        lowercase:true,
        unique:true,
        required: true,
        
    },
    password:{
        type:String,
        required: true
    }
});



userSchema.pre('save', async function(){
    try{
        var user = this;
        const salt = await(bcrypt.genSalt(10));
        const hashpass = await bcrypt.hash(user.password,salt);

        user.password = hashpass;
    }catch(e){
        throw e;
    }
});

userSchema.methods.comparePassword = async function(userPassword){
    try{
        const isMatch = await bcrypt.compare(userPassword,this.password);
        return isMatch;
    }catch(e){
        throw e;
    }
}

const UserModel = db.model('user', userSchema);

module.exports = UserModel;
