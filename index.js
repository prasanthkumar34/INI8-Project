const express = require('express');
const app = express();
const bodyparser = require('body-parser');
require('express-async-errors')

const db = require('./db');
    employeeRoutes=require('./Controllers/employee.controller')


app.use(bodyparser.json())    


app.use('/api/employees',employeeRoutes)    

app.use((err,req,res,next)=>{
    console.log(err)
    res.status(err.status || 500).send("something went wrong")
})

db.query("SELECT 1")
.then(()=>{
    console.log('db connection successful')
})
.catch(err=>console.log('db connection failed. \n'+err))

app.listen(3000,()=>{
    console.log("Server running successfully in port 3000");
});

