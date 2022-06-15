const router = require('express').Router();
const parentController = require('../controllers/ParentController');

router.get('/', parentController.index);
router.get('/:id', parentController.show);
router.post('/', parentController.create);
router.patch('/:id', parentController.update);
router.delete('/:id', parentController.destroy);

module.exports = router;
