const userModel = require('./UsersModel')
const postModel = require('./PostsModel')
const likeModel = require('./LikesModel')
const commentModel = require('./CommentsModel')
async function init () {
    userModel.hasMany(postModel,{foreignKey:{allowNull:false,name:'user_id'}, onDelete:'CASCADE'})

    postModel.belongsTo(userModel,{foreignKey:{allowNull:false,name:'user_id'}, onDelete:'CASCADE'})

    userModel.hasMany(likeModel,{foreignKey:{allowNull:false,name:'user_id'}, onDelete:'CASCADE'})

    likeModel.belongsTo(userModel,{foreignKey:{allowNull:false,name:'user_id'}, onDelete:'CASCADE'})

    userModel.hasMany(commentModel,{foreignKey:{allowNull:false,name:'user_id'}, onDelete:'CASCADE'})

    commentModel.belongsTo(userModel,{foreignKey:{allowNull:false,name:'user_id'}, onDelete:'CASCADE'})

    postModel.hasMany(likeModel,{foreignKey:{allowNull:false,name:'post_id'}, onDelete:'CASCADE'})

    likeModel.belongsTo(postModel,{foreignKey:{allowNull:false,name:'post_id'}, onDelete:'CASCADE'})

    postModel.hasMany(commentModel,{foreignKey:{allowNull:false,name:'post_id'}, onDelete:'CASCADE'})

    commentModel.belongsTo(postModel,{foreignKey:{allowNull:false,name:'post_id'}, onDelete:'CASCADE'})

    await userModel.sync()
    await postModel.sync()
    await likeModel.sync()
    await commentModel.sync()
}
init()
module.exports = {
    users: userModel,
    posts: postModel,
    likes: likeModel,
    comments: commentModel
}