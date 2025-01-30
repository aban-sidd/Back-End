const express = require('express')
const {getUser , singleUser, postUser , updateUser , deleteUser } = require('../controllers/admin.controller')

const route = express.Router()

route.get('/',getUser)
route.get('/:id',singleUser)
route.post('/',postUser)
route.patch('/:id',updateUser)
route.delete('/:id',deleteUser)

module.exports = route