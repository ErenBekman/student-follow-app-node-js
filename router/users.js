const router = require('express').Router();
const UserController = require('../controllers/UserController');
const authenticateToken = require('../middleware/authenticate');

router.get('/', authenticateToken, UserController.index);
router.get('/:id', UserController.show);
router.post('/', UserController.create);
router.patch('/:id', UserController.update);
router.delete('/:id', UserController.destroy);

module.exports = router;
