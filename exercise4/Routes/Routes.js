let express = require('express')
let router = express.Router()
let controller = require('../Controllers/controller')

router.get('/', (req,res)=>{
    controller.getProducts(req,res)
})
router.get('/:id', (req,res)=>{
    controller.getSpecificProduct(req,res)
})

module.exports = router