const router = require('express').Router();
const schoolController = require('../controllers/SchoolController');

router.get('/', schoolController.index);
router.get('/:id', schoolController.show);
router.post('/', schoolController.create);
router.patch('/:id', schoolController.update);
router.delete('/:id', schoolController.destroy);

module.exports = router;
