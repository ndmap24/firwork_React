const mongoose = require('mongoose');
const url = "mongodb+srv://mydatabase:OiSDAnrHjXGUc8o2@cluster0.zgg9u.mongodb.net/infograin?retryWrites=true&w=majority"
/** connect to MongoDB datastore */
try {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log("Db connected")
    })    
} catch (error) {
    console.log(error)
}

module.exports = {
    user: require('../model/user_model'),
};
