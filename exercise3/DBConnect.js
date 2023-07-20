const {Sequelize} = require('sequelize')
const sequelize = new Sequelize(
    'exercise3two',
    'root',
    'shagbark1030',
    {
        host:'127.0.0.1',
        dialect:'mysql'
    }
)
const connectMySQL = async () => {
    try {
        await sequelize.authenticate()
        console.log('succesfully connected')
    }
    catch (error){
        console.log(error)
    }
}
connectMySQL()
module.exports = {
    Sequelize:sequelize
}