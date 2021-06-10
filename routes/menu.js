const router = require('express').Router();
const { MenuController } = require('../controller');
const { isAuthenticated } = require('../middleware/auth');

router.post('/', isAuthenticated, MenuController.addMenu);
router.get('/', MenuController.getMenu);
router.put('/:id', isAuthenticated, MenuController.editMenu);
router.delete('/:id', isAuthenticated, MenuController.deleteMenu);

module.exports = router;
