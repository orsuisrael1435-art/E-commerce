const express = require('express')
const dotenv = require('dotenv').config()
const connectDb = require('./config/db')
const cors = require('cors')
const app = express()
const productRoute = require('./routes/productroute')

connectDb()

app.use(express.json())
app.use(cors({ origin: "https://e-commerce-swart-three.vercel.app" }))
app.use('/api/products', productRoute)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port http://localhost:${process.env.PORT}`)
})