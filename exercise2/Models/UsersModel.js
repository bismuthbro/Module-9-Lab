let mongoose = require('mongoose')
let Schema = mongoose.Schema
let usersSchema = new Schema({
    name: mongoose.Schema.Types.String,
    username: mongoose.Schema.Types.String,
    password: mongoose.Schema.Types.String,
    email: mongoose.Schema.Types.String
})
let userModel = mongoose.model('Users', usersSchema)
module.exports = userModel