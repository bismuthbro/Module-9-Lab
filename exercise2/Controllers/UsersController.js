let model = require('../Models/UsersModel.js')
exports.createUser = (req,res) => {
    let newUser = new model(req.body)
    newUser.save()
    .then((data)=>{
        res.json({data})
    })
    .catch((error)=> {
        console.error(error)
        res.json({error})
    })
}
