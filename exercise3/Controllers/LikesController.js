let {likes} = require('../Models/index.js')
exports.createLike = (req,res) => {
    likes.create(req.body)
    .then((data)=>{
        res.json({data})
    })
    .catch((error)=> {
        console.error(error)
        res.json({error})
    })
}
