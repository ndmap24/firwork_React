var service = require('../../services/service');
var mongoose = require('mongoose');   

//describe the model
var User = service.user;

//common function
function userModel()
{
    this.findOneData=(table,findCondition)=>{
        return new Promise((resolve,reject)=>{
            table.findOne(findCondition,(err,result)=>{
                err ? reject(err) : resolve(result);
            })
        })
    }

    this.addData=(tableData)=>{
        return new Promise((resolve,reject)=>{
            tableData.save((err, Detail)=> {
                err ? reject(err) : resolve(Detail);
            })
        })
    }

    this.updateOneData=(table,setCondition,setData)=>{
        return new Promise((resolve,reject)=>{
            table.updateOne(setCondition,setData,(err,result)=> {
                err ? reject(err) : resolve(result);
            })   			
        })
    }

    this.findData=(table,findCondition)=>{
        return new Promise((resolve,reject)=>{
            table.find(findCondition,(err,result)=>{
                err ? reject(err) : resolve(result);
            })
        })
    }
    
    this.updateMany=(table,setCondition,setData)=>{
        return new Promise((resolve,reject)=>{
            table.updateMany(setCondition,setData,(err,result)=> {
                err ? reject(err) : resolve(result);
            })   			
        })
    }

}

module.exports=new userModel()
