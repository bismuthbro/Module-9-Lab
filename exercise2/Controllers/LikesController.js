let model = require('../Models/LikesModel.js')
exports.createLike = (req,res) => {
    let newLike = new model(req.body)
    newLike.save()
    .then((data)=>{
        res.json({data})
    })
    .catch((error)=> {
        console.error(error)
        res.json({error})
    })
}
