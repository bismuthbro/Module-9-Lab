let express = require('express')
let router = express.Router()
let controller = require('../Controllers/PostsController')

router.post('/newpost', (req,res)=>{
    controller.createPost(req,res)
})

module.exports = router