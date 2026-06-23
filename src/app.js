const express = require('express')

require('dotenv').config()

const userRoute = require('./routes/userRoutes')
const app = express();


app.use(express.json())
app.use('/user',userRoute)


module.exports = app;