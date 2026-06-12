const express = require('express');
const { getproducts, createProducts, updateProducts, deleteproduct } = require('../contollers/productcontroller');
const router = express.Router();


router.get('/', getproducts)
router.post('/', createProducts)
router.put('/:id', updateProducts)
router.delete('/:id', deleteproduct)
module.exports = router