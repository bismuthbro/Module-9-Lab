let mongoose = require('mongoose')
let Schema = mongoose.Schema
let commentsSchema = new Schema({
    comment_description: mongoose.Schema.Types.String,
    post_id: mongoose.Schema.Types.ObjectId,
    user_id: mongoose.Schema.Types.ObjectId,
})
let commentsModel = mongoose.model('Comments', commentsSchema)
module.exports = commentsModel