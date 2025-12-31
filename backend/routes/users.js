const express = require('express');
const { param } = require('express-validator');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

// Protected routes
router.get('/', auth, userController.getAllUsers);
router.get('/:id', [param('id').isMongoId()], userController.getUserById);
router.put('/:id', auth, [param('id').isMongoId()], userController.updateUserProfile);
router.delete('/:id', auth, [param('id').isMongoId()], userController.deleteUser);

module.exports = router;
