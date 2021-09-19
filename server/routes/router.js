
const {createEmployee,getAllEmployees,getAllCompanies,createCompany,deleteCompany,
deleteEmployee,updateEmployee,updateCompany, getEmployeeById}
 = require('../controllers/controllers')
 

const router =  require('express').Router()
 router.post('/employees',createEmployee)
 router.get('/employees',getAllEmployees)
 router.post('/companies',createCompany)
 router.get('/companies',getAllCompanies)
 router.delete('/companies/:id',deleteCompany)
 router.delete('/employees/:id',deleteEmployee)
 router.put('/employees/:id',updateEmployee)
 router.put('/companies/:id',updateCompany)
 router.get('/employees/:id',getEmployeeById)

module.exports = router