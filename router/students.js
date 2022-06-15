const router = require('express').Router();
const studentController = require('../controllers/StudentController');

router.get('/', studentController.index);
router.get('/:id', studentController.show);
router.post('/', studentController.create);
router.patch('/:id', studentController.update);
router.delete('/:id', studentController.destroy);

module.exports = router;
