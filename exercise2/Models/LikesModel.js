let mongoose = require('mongoose')
let Schema = mongoose.Schema
let likesSchema = new Schema({
    user_id: mongoose.Schema.Types.ObjectId,
    post_id: mongoose.Schema.Types.ObjectId
})
let likesModel = mongoose.model('Likes', likesSchema)
module.exports = likesModel