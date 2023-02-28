const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getAllClients);
router.post('/', controller.createClient);
router.get('/:id', controller.getClientById);
router.put('/:id', controller.updateClient);
router.delete('/:id', controller.deleteClient);

module.exports = router;
