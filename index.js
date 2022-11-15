require('./DB');
require('./Schema/User')
const express = require('express');
const bodyParser = require('body-parser');
const App = express();

const mongoose = require('mongoose');
const User = mongoose.model('images')

const upload = require('./Middleware/Multer')
const cloudinary = require('./Middleware/Cloudinary')

let Port = 4003;

App.use(bodyParser.json());

App.post("" , upload , async (req,res) => {
    const result = await cloudinary.uploader.upload(req.file.path)
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        picture: result.secure_url

        // picture: req.file
    })
    user.save()
    .then( (data) => {
        console.log(data)
        res.send(data)
    })
    .catch( (error) => {
        console.log("error :" , error.message)
    })
})

App.get("", (req, res) => {
    res.send("Pakistan Zindabad")
})



App.listen(Port, () => {
    console.log("Server Run on Port :" , Port)
})