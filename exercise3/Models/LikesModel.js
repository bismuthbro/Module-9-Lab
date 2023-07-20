let {DataTypes, Model} = require('sequelize')
const dbConnect = require('../DBConnect.js')
const sequelizeInstance = dbConnect.Sequelize
class like extends Model {}
like.init({
    like_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
},{
    sequelize:sequelizeInstance,
    modelName:"likes",
    timestamps: false,
    freezeTableName: true
})
module.exports = like