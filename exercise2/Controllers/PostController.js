let model = require('../Models/PostsModel.js')
exports.createPost = (req,res) => {
    let newPost = new model(req.body)
    newPost.save()
    .then((data)=>{
        res.json({data})
    })
    .catch((error)=> {
        console.error(error)
        res.json({error})
    })
}
