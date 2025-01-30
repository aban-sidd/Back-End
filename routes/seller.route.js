const express = require('express')
const {sellerUser, singleSeller, sellerPost, sellerPatch, sellerDelete } = require('../controllers/seller.controller')

const route = express.Router()

route.get('/',sellerUser)
route.get('/:id',singleSeller)
route.post('/',sellerPost)
route.patch('/:id',sellerPatch)
route.delete('/:id',sellerDelete)


module.exports = route