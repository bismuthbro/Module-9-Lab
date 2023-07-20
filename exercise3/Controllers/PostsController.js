let {posts} = require('../Models/index.js')
exports.createPost = (req,res) => {
    posts.create(req.body)
    .then((data)=>{
        res.json({data})
    })
    .catch((error)=> {
        console.error(error)
        res.json({error})
    })
}
