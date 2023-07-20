let {comments} = require('../Models/index.js')
exports.createComment = (req,res) => {
    comments.create(req.body)
    .then((data)=>{
        res.json({data})
    })
    .catch((error)=> {
        console.error(error)
        res.json({error})
    })
}
