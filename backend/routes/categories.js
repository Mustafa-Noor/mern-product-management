const express = require('express');
const { body, param } = require('express-validator');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const handleValidationErrors = require('../middleware/validation');
const auth = require('../middleware/auth');

// Public routes
router.get('/', categoryController.getAllCategories);
router.get('/:id', [param('id').isMongoId().withMessage('Invalid category ID')], categoryController.getCategoryById);

// Protected routes
router.post(
  '/',
  auth,
  [
    body('name').trim().isLength({ min: 1 }).withMessage('Category name is required'),
    body('description').trim().optional(),
    body('image').optional()
  ],
  handleValidationErrors,
  categoryController.createCategory
);

router.put(
  '/:id',
  auth,
  [
    param('id').isMongoId().withMessage('Invalid category ID'),
    body('name').optional().trim().isLength({ min: 1 }),
    body('description').optional().trim(),
    body('image').optional()
  ],
  handleValidationErrors,
  categoryController.updateCategory
);

router.delete('/:id', auth, [param('id').isMongoId().withMessage('Invalid category ID')], categoryController.deleteCategory);

module.exports = router;
