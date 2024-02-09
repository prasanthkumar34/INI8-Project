const db = require('../db')  
module.exports.getAllEmployees  = async ()=>{
    const [records] =await db.query("Select * from registration")
        
    return records;    
}

module.exports.getEmployeeId  = async (id)=>{
    const [[record]] =await db.query("Select * from registration where id = ? ",[id])
        
    return record;    
}

module.exports.deleteEmployee= async (id)=>{
    const [record] =await db.query("Delete  from registration where id = ? ",[id])
        
    return record.affectedRows;    
}

module.exports.addOrEditEmployee= async (obj,id=0)=>{
    const [[[{affectedRows}]]] =await db.query("CALL usp_employee_add_or_edit(?,?,?,?)",
    [id,obj.Name,obj.Email,obj.DateOfBirth])
        
    return affectedRows;    
}