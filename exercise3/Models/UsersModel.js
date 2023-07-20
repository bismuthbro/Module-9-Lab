let {DataTypes, Model} = require('sequelize')
const dbConnect = require('../DBConnect.js')
const sequelizeInstance = dbConnect.Sequelize
class user extends Model {}
user.init({
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize:sequelizeInstance,
    modelName:"users",
    timestamps: false,
    freezeTableName: true
})
module.exports = user