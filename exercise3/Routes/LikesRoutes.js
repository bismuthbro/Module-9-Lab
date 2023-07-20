let express = require('express')
let router = express.Router()
let controller = require('../Controllers/LikesController')

router.post('/newlike', (req,res)=>{
    controller.createLike(req,res)
})

module.exports = router