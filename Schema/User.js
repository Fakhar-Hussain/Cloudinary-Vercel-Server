const mongoose = require('mongoose')

const CloudinaryUser = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    picture: {
        type: String,
    }
})

mongoose.model('images' , CloudinaryUser) ;