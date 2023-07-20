let mongoose = require('mongoose')
const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect('mongodb://127.0.0.1:27017/exercise2', mongooseOptions)
.then(()=> console.log('successful connection'))