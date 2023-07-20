let express = require('express')
let router = express.Router()
let controller = require('../Controllers/UsersController')

router.post('/newuser', (req,res)=>{
    controller.createUser(req,res)
})

module.exports = router