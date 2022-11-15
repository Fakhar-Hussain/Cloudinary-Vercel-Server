const mongoose = require('mongoose');
const DB = "mongodb+srv://Fakhar:042069454@cluster0.ceb9lzw.mongodb.net/NodeServer"

// const DB = "mongodb://localhost:27017/NodeServer" 
// "mongodb+srv://Fakhar:042069454@cluster0.fmyl0jl.mongodb.net/test"

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then( () => {
    console.log('MONGO-DB Server Connected')
}).catch( () => {
    console.log('Server not Connected')
})