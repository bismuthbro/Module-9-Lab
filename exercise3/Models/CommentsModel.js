let {DataTypes, Model} = require('sequelize')
const dbConnect = require('../DBConnect.js')
const sequelizeInstance = dbConnect.Sequelize
class comment extends Model {}
comment.init({
    comment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    comment_description: {
        type: DataTypes.STRING,
        allowNull: false
    },
},{
    sequelize:sequelizeInstance,
    modelName:"comments",
    timestamps: false,
    freezeTableName: true
})
module.exports = comment