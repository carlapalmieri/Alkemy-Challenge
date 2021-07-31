const { Router} = require('express');
const router = Router();

const { getLastExpenses, getLastIncomings, getIncomings, getExpenses, getAllOperations, getLastOperations, insertOperation, getOperationById, deleteOperation, updateOperation } = require('../controllers/index.controllers')

// page home
router.get('/lastoperations', getLastOperations);
router.get('/incomings', getIncomings);
router.get('/expenses', getExpenses);

// page ABM

router.get('/operations', getAllOperations);
router.get('/operations/:id', getOperationById);

router.get('/lastincomings', getLastIncomings);
router.get('/lastexpenses', getLastExpenses);
router.post('/operations', insertOperation);
router.delete('/operations/:id', deleteOperation);
router.put('/operations/:id', updateOperation);


module.exports = router;

