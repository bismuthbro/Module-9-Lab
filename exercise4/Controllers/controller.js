const axios = require('axios')
exports.getProducts = (req,res)=>{
    axios.get('https://fakestoreapi.com/products')
    .then((response)=>{res.json({data:response.data});
    console.log(response.data)
})
    .catch((error)=>{res.json({error})})
}
exports.getSpecificProduct = (req,res)=>{
    axios.get(`https://fakestoreapi.com/products/${req.params.id}`)
    .then((response)=>{res.json({data:response.data});
    console.log(response.data)
})
    .catch((error)=>{res.json({error})})
}