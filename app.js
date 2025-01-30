const express = require('express')
const blogRoutes = require('./routes/blogs.route')
const adminRoutes = require('./routes/admin.route')
const sellerRoutes = require('./routes/seller.route')
const buyerRoutes = require('./routes/buyer.route')
const categoryRoutes = require('./routes/category.route')
const recommendRoutes = require('./routes/recommend.route')

const app = express()

app.use(express.json())

// Blogs
app.use('/api/v1/blogs',blogRoutes)

// admin
app.use('/api/v1/admin',adminRoutes)

// seller
app.use('/api/v1/seller',sellerRoutes)

// buyer
app.use('/api/v1/buyer',buyerRoutes)

// category
app.use('/api/v1/category',categoryRoutes)

// recommend
app.use('/api/v1/recommend',recommendRoutes)

module.exports = app