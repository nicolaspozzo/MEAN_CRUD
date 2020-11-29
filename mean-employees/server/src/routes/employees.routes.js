
const { Router } = require('express')
const router = Router()

const employeesCtrl = require('../controllers/employees.controller.js')

// CRUD

router.get('/', employeesCtrl.getEmployees);

router.post('/', employeesCtrl.creatEmployee);

router.get('/:id', employeesCtrl.getEmployee);

router.put('/:id', employeesCtrl.editEmployee);

router.delete('/:id', employeesCtrl.deleteEmployee);


module.exports = router;