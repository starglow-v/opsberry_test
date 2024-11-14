const express = require('express');
const router = express.Router();
const iamController = require('../controllers/iamController');

router.post('/generate-iam-report', iamController.generateIAMReport);

module.exports = router;