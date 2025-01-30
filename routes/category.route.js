const express = require('express')
const {getCategory , singleCategory, postCategory , updateCategory , deleteCategory} = require('../controllers/category.controller')

const route = express.Router()

route.get('/',getCategory)
route.get('/:id',singleCategory)
route.post('/',postCategory)
route.patch('/:id',updateCategory)
route.delete('/:id',deleteCategory)

module.exports = route