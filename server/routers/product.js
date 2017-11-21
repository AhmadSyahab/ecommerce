const router = require('express').Router()
const controller = require('../controller/product')

router.get('/', controller.findAll)
router.post('/', controller.create)
router.delete('/:productId', controller.destroy)
router.put('/:productId', controller.update)



module.exports = router