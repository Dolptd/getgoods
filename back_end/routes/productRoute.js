const express = require('express');
const router = express.Router();

//Controllers
const productController = require('../controllers/productController');
const authController = require('../controllers/authController');
const reviewRouter = require('./reviewRoute');

//Nested routes
router.use('/:productId/reviews', reviewRouter);

//Routes
router
    .route('/')
    .get(authController.protect, productController.getAllProducts)
    .post(productController.createProduct);

router
    .route('/:id')
    .get(productController.getProduct)
    .patch(productController.updateProduct)
    .delete(productController.deleteProduct);

module.exports = router;