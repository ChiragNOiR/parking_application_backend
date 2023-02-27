const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb://localhost:27017/parkingApp').on('open', ()=>{
    console.log('MongoDB connected')
}).on('error', ()=>{
    console.log('MongoDB connection ERROR!!')
});

module.exports = connection;