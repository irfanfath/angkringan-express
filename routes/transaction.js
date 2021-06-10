const router = require('express').Router();
const { TrxController } = require('../controller');
const { isAuthenticated } = require('../middleware/auth');

router.post('/', isAuthenticated, TrxController.addTrx);
router.get('/', TrxController.getTrx);
router.delete('/:id', isAuthenticated, TrxController.deleteTrx);

module.exports = router;
