const express = require('express')
const {getRecommend , singleRecommend, postRecommend , updateRecommend , deleteRecommend} = require('../controllers/recommend.controller')

const route = express.Router()

route.get('/',getRecommend)
route.get('/:id',singleRecommend)
route.post('/',postRecommend)
route.patch('/:id',updateRecommend)
route.delete('/:id',deleteRecommend)

module.exports = route