let {DataTypes, Model} = require('sequelize')
const dbConnect = require('../DBConnect.js')
const sequelizeInstance = dbConnect.Sequelize
class post extends Model {}
post.init({
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image_path: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize:sequelizeInstance,
    modelName:"posts",
    timestamps: false,
    freezeTableName: true
})
module.exports = post