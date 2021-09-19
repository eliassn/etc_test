const {Employee,Company} = require('../models')
const validation = require('../validation')


const createEmployee = async(req,res)=>{
    const {error} = validation(req.body)
    if(error) return res.status(400).json(error.details[0].message)
const {nom,prenom,profileimage,email,idCompany} = req.body
try {
    const savedEmployee = await Employee.create({nom,prenom,profileimage,email,idCompany})
    return res.status(200).json("created successfully!!!")
} catch (error) {
   return  res.status(500).json(error)
}
}
const getAllEmployees = async(req, res, next) => {
  const employees =  await Employee.findAll()
  try {
      return res.json(employees)
  } catch (error) {
      res.json(error)
  }
}
const getEmployeeById = async(req,res)=>{
    const id = req.params.id
    try {
        const employee = await Employee.findOne({where:{id}})
        return res.json(employee)
    } catch (error) {
        res.json(error)
    }
}
const deleteEmployee =async (req,res)=>{
    const id = req.params.id
    try {
        const employee =  await Employee.findOne({where : {id}})
        await employee.destroy()
        return res.json({message:'employee deleted!'})
    } catch (error) {
        res.json(error)
    }
}
const updateEmployee = async(req,res)=>{
    const id = req.params.id
    try {
        const employee = await Employee.findOne({where:{id}})
        await employee.update(req.body)
        return res.json("updated successfully!!")
    } catch (error) {
        res.json(error)
    }
}
///////////////////////////////
const createCompany = async(req,res)=>{
    const {raisonSociale,addresseMail,employees} = req.body
    try {
        
        const savedCompany = await Company.create({raisonSociale,addresseMail,employees})
        return res.status(200).json(savedCompany)
    } catch (error) {
       return  res.status(500).json(error)
    }
    }
    const getAllCompanies = async(req, res, next) => {
      const companies =  await Company.findAll()
      try {
          return res.json(companies)
      } catch (error) {
          res.json(error)
      }
    }
    const deleteCompany =async (req,res)=>{
        const id = req.params.id
        try {
            const company =  await Company.findOne({where : {id}})
            await company.destroy()
            return res.json({message:'company deleted!'})
        } catch (error) {
            res.json(error)
        }
    }
    const updateCompany = async(req,res)=>{
        const id = req.params.id
        try {
            const company = await Company.findOne({where:{id}})
            await company.update(req.body)
            return res.json(company)
        } catch (error) {
            res.json(error)
        }
    }
    module.exports.updateCompany = updateCompany
    module.exports.updateEmployee = updateEmployee
    module.exports.deleteEmployee = deleteEmployee
    module.exports.deleteCompany = deleteCompany
module.exports .createEmployee= createEmployee
module.exports.getAllEmployees= getAllEmployees
module.exports.createCompany = createCompany
module.exports.getAllCompanies = getAllCompanies
module.exports.getEmployeeById = getEmployeeById