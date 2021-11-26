var service = require('../../services/service');
var mongoose = require('mongoose');   

//describe the model
var User = service.user;

//common function
function adminModel(){
    /* -----------------------this is Comman function for CRUD--------------------------- */
    this.findOneData=(table,findCondition)=>{
        return new Promise((resolve,reject)=>{
            table.findOne(findCondition,(err,result)=>{
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

    this.deleteData=(tableData,findCondition)=>{
        return new Promise((resolve,reject)=>{
            tableData.remove(findCondition, (err,result)=>{
                err ? reject(err) : resolve(result);
            })
        })
    }

    this.updateData=(table,setCondition,setData)=>{
        return new Promise((resolve,reject)=>{
            table.updateMany(setCondition,setData,(err,result)=> {
                err ? reject(err) : resolve(result);
            })   			
        })
    }

    this.getUser=(filters,sortData,page,perPage)=>{
        return new Promise((resolve,reject)=>{
            User.aggregate([
                {
                    $match:filters
                }
            ],(err,result)=>{
                err ? reject(err) : resolve(result);
            }).sort(sortData).skip(perPage * page).limit(perPage)               
        })
    }

    this.getUserCount=(filters)=>{
        return new Promise((resolve,reject)=>{
            User.aggregate([
                {
                    $match:filters
                },
                {      
                    $group: {
                        _id:null,
                        count: {
                            $sum: 1
                        }
                    }
                }
            ],(err,result)=>{
                err ? reject(err) : resolve(result);
            })               
        })
    }
}

module.exports=new adminModel()

