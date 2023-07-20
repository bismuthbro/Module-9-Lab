let express = require('express')
let router = express.Router()
let controller = require('../Controllers/CommentsController')

router.post('/newcomment', (req,res)=>{
    controller.createComment(req,res)
})

module.exports = router