var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    role: {       //(1=admin,2=buyer,3=seller)
        type: Number,
    },
    status: {     //(1-Approve/Active , 2-Unapprove/inactive,3-Delete)
        type: Number,
    },
    name: {
        type: String,
        default:""
    },
    email: {
        type: String,
        lowercase: true 
    },
    password: {
        type: String,
        default:""
    },
    contact_no: {
        type: String,
    },
    address:{
        type: String,
        default:''
    },
    profile_image: {  
        type: String,
        default:''
    },
    created_on: { 
        type: Date
    },
    updated_on: {
        type: Date
    }
})

module.exports = mongoose.model('users', userSchema);
