const express = require('express')
const {getBlogs , singleBlog, postBlog , updateBlog , deleteBlog } = require('../controllers/blog.controller')

const route = express.Router()

route.get('/',getBlogs)
route.get('/:id',singleBlog)
route.post('/',postBlog)
route.patch('/:id',updateBlog)
route.delete('/:id',deleteBlog)

module.exports = route