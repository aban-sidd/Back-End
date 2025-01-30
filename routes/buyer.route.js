const express = require('express')

const {getBuyer , singleBuyer, postBuyer , updateBuyer , deleteBuyer} = require('../controllers/buyer.controller')

const route = express.Router()


route.get('/',getBuyer)
route.get('/:id',singleBuyer)
route.post('/',postBuyer)
route.patch('/:id',updateBuyer)
route.delete('/:id',deleteBuyer)

module.exports = route