const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

router.post('/', transactionController.createTransaction);
router.get('/:id', transactionController.getTransactionById);

// Other routes for update, delete, etc.

module.exports = router;
