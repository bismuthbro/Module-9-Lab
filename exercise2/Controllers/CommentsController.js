let model = require('../Models/CommentsModel.js')
exports.createComment = (req,res) => {
    let newComment = new model(req.body)
    newComment.save()
    .then((data)=>{
        res.json({data})
    })
    .catch((error)=> {
        console.error(error)
        res.json({error})
    })
}
