const router = require('express').Router();
const serviceController = require('../controllers/ServiceController');

router.get('/', serviceController.index);
router.get('/:id', serviceController.show);
router.post('/', serviceController.create);
router.patch('/:id', serviceController.update);
router.delete('/:id', serviceController.destroy);

module.exports = router;
