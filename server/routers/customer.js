const router = require('express').Router()
const controller = require('../controller/customer')

router.get('/', controller.findAll)
router.post('/', controller.create)
router.delete('/:userId', controller.destroy)
router.put('/:userId', controller.update)



module.exports = router