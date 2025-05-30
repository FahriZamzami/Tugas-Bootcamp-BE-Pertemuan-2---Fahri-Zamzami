const express = require('express');
const router = express.Router();
const operatorController = require('../controllers/operatorInfo.controller')

router.get('/operatorinfo', operatorController.listOperator);
router.post('/operatorinfo', operatorController.addOperator);
router.put('/operatorinfo/:id', operatorController.updateOperator);
router.delete('/operatorinfo/:id', operatorController.deleteOperator);
router.get('/operatorinfo/:id', operatorController.detailOperator);
router.patch('/operatorinfo/:id', operatorController.patchOperator);

module.exports = router;