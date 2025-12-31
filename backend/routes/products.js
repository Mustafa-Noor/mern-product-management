const express = require('express');
const { body, param } = require('express-validator');
const router = express.Router();
const productController = require('../controllers/productController');
const handleValidationErrors = require('../middleware/validation');
const auth = require('../middleware/auth');

// Public routes
router.get('/', productController.getAllProducts);
router.get('/:id', [param('id').isMongoId().withMessage('Invalid product ID')], productController.getProductById);

// Protected routes
router.post(
  '/',
  auth,
  [
    body('name').trim().isLength({ min: 1 }).withMessage('Product name is required'),
    body('description').trim().optional(),
    body('price').isFloat({ min: 0 }).withMessage('Price must be a positive number'),
    body('category').isMongoId().withMessage('Invalid category ID'),
    body('stock').isInt({ min: 0 }).withMessage('Stock must be a non-negative number'),
    body('image').optional()
  ],
  handleValidationErrors,
  productController.createProduct
);

router.put(
  '/:id',
  auth,
  [
    param('id').isMongoId().withMessage('Invalid product ID'),
    body('name').optional().trim().isLength({ min: 1 }),
    body('description').optional().trim(),
    body('price').optional().isFloat({ min: 0 }),
    body('category').optional().isMongoId(),
    body('stock').optional().isInt({ min: 0 }),
    body('image').optional()
  ],
  handleValidationErrors,
  productController.updateProduct
);

router.delete('/:id', auth, [param('id').isMongoId().withMessage('Invalid product ID')], productController.deleteProduct);

module.exports = router;
