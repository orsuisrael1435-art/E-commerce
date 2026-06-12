const product = require('../models/product')

const getproducts = async(req, res) => {
    try {
        const products = await product.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const createProducts = async(req, res) => {
    try {
        const products = await product.create(req.body)
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const updateProducts = async(req, res) => {
    try {
        const products = await product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteproduct = async(req, res) => {
    try {
        const products = await product.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: 'Product deleted successfully' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
module.exports = { getproducts, createProducts, updateProducts, deleteproduct }