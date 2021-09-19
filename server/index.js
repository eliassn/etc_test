const express = require('express')
const cors = require('cors')
const dotenv  = require('dotenv')
const {sequelize} = require('./models')
const router = require('./routes/router')
dotenv.config()
///////////////////////////////


const app = express()
const port = process.env.PORT || 9000
////////////////////////////////
app.listen({port:port},async()=>{
    console.log(`server up on port ${port}`)
    await sequelize.sync()
    console.log('db synced!')
})
////////////////////////////////
app.use(cors())
app.use(express.json())
app.use('/',router)
