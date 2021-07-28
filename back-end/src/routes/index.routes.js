const { Router} = require('express');
const router = Router();

const { getOperations, insertOperation, getOperationById, deleteOperation, updateOperation } = require('../controllers/index.controllers')

router.get('/operations', getOperations);
router.get('/operations/:id', getOperationById);
router.post('/operations', insertOperation);
router.delete('/operations/:id', deleteOperation);
router.put('/operations/:id', updateOperation);


module.exports = router;

