const router = require('express').Router();
const UserController = require('../controllers/UserController');
const authenticateToken = require('../middleware/authenticate');

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.post('/logout', UserController.logout);
router.get('/me', authenticateToken, (req, res) => {
	res.json(req.user);
});

module.exports = router;
