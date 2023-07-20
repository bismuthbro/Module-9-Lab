let {users} = require('../Models/index.js')
exports.createUser = (req,res) => {
    users.create(req.body)
    .then((data)=>{
        res.json({data})
    })
    .catch((error)=> {
        console.error(error)
        res.json({error})
    })
}
