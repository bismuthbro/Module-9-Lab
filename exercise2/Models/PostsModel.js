let mongoose = require('mongoose')
let Schema = mongoose.Schema
let postsSchema = new Schema({
    user_id: mongoose.Schema.Types.ObjectId,
    description: mongoose.Schema.Types.String,
    image_path: mongoose.Schema.Types.String,
    post_title: mongoose.Schema.Types.String
})
let postModel = mongoose.model('Posts', postsSchema)
module.exports = postModel