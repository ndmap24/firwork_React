const express = require("express");
const bcrypt = require('bcryptjs');
const path = require('path'); 
const mongoose = require('mongoose');   
const fs = require('fs');  
const log = require('log-to-file');
const jwt = require("jsonwebtoken");
const request = require("request"); 
const uniqid = require('uniqid');
const https = require('https'); 
const http = require('http'); 

const adminModel = require("../db_model/admin.model");
const helpers = require("../../helpers/helpers");
const service = require('../../services/service');
const error = require("../../util/error.json");
const tokenMiddleware = require("../../middleware/tokenMiddleware");

const router = express.Router(); 
JWT_SECRET = process.env.JWT_SECRET
var User = service.user;

var appDir = path.dirname(require.main.filename);

module.exports = router;

//-----------------  Admin Data  -----------------
/* static data entry of admin */
router.post('/admin_register', (req, res) => {	
	// admin registration
	var  newUser = User	({
                        role: 1,      //(1=admin,2=buyer,3=seller)
                        status: 1,     //0-Default_Register,1-Active , 2-inactive,3-Delete
                        name: "Admin",
                        email: "admin@gmail.com",
                        password:  bcrypt.hashSync("123456",10),
                        contact_no:"1234567890",
						address:"LIG Indore",
                        profile_image: "", 
                        created_on: new Date(),
                        updated_on: new Date()
					})
	newUser.save(function(err, usertDetail) {
		if(err){
			return	res.send({ status: 201, msg: 'Something went wrong',error:err});
		}else{
			return	res.send({ status: 200, msg: 'Added Successfully',data:usertDetail});
		}
	})
})

/*this method used to check token is valid or not*/
router.post('/check_token',tokenMiddleware,(req,res)=>{
	var expireTime = res.locals.userData.exp
	var currentTime =  Math.floor(Date.now() / 1000)
	if(currentTime<expireTime){
		return	res.send({ status: 200, msg:error.success ,data:[]})
	}else{
		return	res.send({ status: 201, msg:error.failed ,data:[]})
	}
})

//-----------------  Auth  -----------------

/* this method used for login (admin) */
router.post('/login', (req, res) => {	
	var userEmail = req.body.userEmail ? req.body.userEmail.toLowerCase().trim() : "";
	var password = req.body.password ? req.body.password.trim() : "";

	if(userEmail == "") {
 		return res.send({ status: 201, msg: error.Email_is_required,data:[] }) 
    }else if (password == "") {
 		return res.send({ status: 201, msg: error.Password_is_required,data:[] }) 
    }else{
		var findCondition = {email:userEmail,role:1,status:1}
        var table_name = User;
		adminModel.findOneData(table_name,findCondition).then((userDatas)=>{
			if (!userDatas) { 
				return	res.send({ status: 201, msg: error.Email_and_password_does_not_match,data:[] });
			}
            //compare the password
			var passwordIsValid = bcrypt.compareSync(password, userDatas.password);	

			if (!passwordIsValid){
				return	res.send({ status: 201, msg:error.Email_and_password_does_not_match,data:[] })	
			}

			adminModel.findOneData(table_name,findCondition).then((userData)=>{
				var userRes = userData.toObject();
				delete userRes.password;
				//check details		
				//make user detail object for token generate
				const token_information = 	{
												exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24),
												id: userRes._id,
												name: userRes.name,
												contact_no: userRes.contact_no,
												email: userRes.email,
												role: userRes.role,
												date_time: new Date(),
											};
				//generate token with user detail
				let token = jwt.sign(JSON.stringify(token_information),JWT_SECRET);
				//add token in response
				userRes.token = token;
				return	res.send({ status: 200, msg:error.Login_success ,data:userRes})
			}).catch((err)=>{	
				log('api_login_userData_'+err,appDir+'/logs/'+helpers.current_date(4)+'_error_log.log'); //if error occur then find in logs folder by date 
				res.send({ status: 500, msg:error.internale_server_error ,data:[] })
			})
		}).catch((err)=>{	
			log('api_login_userData_'+err,appDir+'/logs/'+helpers.current_date(4)+'_error_log.log'); //if error occur then find in logs folder by date 
			res.send({ status: 500, msg:error.internale_server_error ,data:[] })
		})
    }
})

//-----------------  User Management  -----------------
//this api is used to show all User list with pagination
router.post('/get_all_user_list',tokenMiddleware, (req, res) => {
	var page_no = parseInt(req.body.page_no) ? parseInt(req.body.page_no) : 0
	var perPage = parseInt(req.body.perPage) ? parseInt(req.body.perPage) : 10
    var page = Math.max(0, page_no)

	var filters = {status:{$nin:[3]} ,role:{$in:[2,3]}}
	
	adminModel.getUserCount(filters).then((countRequest)=>{
		var sortData = {created_on:-1}
		adminModel.getUser(filters,sortData,page,perPage).then((userData)=>{
			var count=0;
			if(countRequest.length>0){
				count = countRequest[0].count
			}
			if(!userData){
				return	res.send({ status: 201, msg: error.User_Not_Exist,data:[] });
			}else{
				return	res.send({ status: 200, msg: error.success,data:{userData:userData,count: count}})
			}
		}).catch((err)=>{	
			log('api_get_all_user_list_userData_'+err,appDir+'/logs/'+helpers.current_date(4)+'_error_log.log'); //if error occur then find in logs folder by date 
			res.send({ status: 500, msg:error.internale_server_error ,data:[] })
		})
	}).catch((err)=>{	
		log('api_get_all_user_list_countRequest_'+err,appDir+'/logs/'+helpers.current_date(4)+'_error_log.log'); //if error occur then find in logs folder by date 
		res.send({ status: 500, msg:error.internale_server_error ,data:[] })
	})
})

//this api is used to find User data by it's id
router.post('/view_user_data_by_id',tokenMiddleware, (req, res) => {
	var user_id = req.body.user_id ? req.body.user_id : "";
	if(user_id == "") {
		return res.send({ status: 201, msg: error.user_id_is_Required,data:[] }) 
    }else{
		table_name = User
		condition = {_id:mongoose.Types.ObjectId(user_id)}
		adminModel.findData(table_name,condition).then((userData)=>{
			if(!userData){
				return	res.send({ status: 201, msg: error.User_Not_Exist,data:[] });
			}else{
				return	res.send({ status: 200, msg: error.success,data:userData})
			}
		}).catch((err)=>{	
			log('api_view_user_data_by_id_userData_'+err,appDir+'/logs/'+helpers.current_date(4)+'_error_log.log'); //if error occur then find in logs folder by date 
			res.send({ status: 500, msg:error.internale_server_error ,data:[] })
		})
	}
})

/*this method used for change Status of User status(Active/Inactive/Delete)*/
router.post('/update_user_status',tokenMiddleware, (req, res) => {
	var user_id = req.body.user_id ? req.body.user_id : "";
	var status = req.body.status ? parseInt(req.body.status) : ""; //1-Active , 2- Inactive ,3-Delete

	if(user_id == "") {
 		return res.send({ status: 201, msg: error.user_id_is_Required,data:[] }) 
    }else if(status == "") {
		return res.send({ status: 201, msg: error.Status_missing,data:[] }) 
    }else{
		var findCondition = {_id:user_id}
		var table_name = User
		setData = {status:status,updated_on:new Date()}
		adminModel.updateOneData(table_name,findCondition,setData).then((updateData)=>{
			return	res.send({ status: 200, msg: error.updated_successfully,data:[]});
		}).catch((err)=>{	
				log('api_update_user_status_updateData_'+err,appDir+'/logs/'+helpers.current_date(4)+'_error_log.log'); //if error occur then find in logs folder by date 
				res.send({ status: 500, msg:error.internale_server_error ,data:[] })
		})
	}
})

/*this method used for update the User*/
router.post('/update_user',tokenMiddleware, (req, res) => {
	var user_id = req.body.user_id ? req.body.user_id : "";
	var email = req.body.email ? req.body.email.toLowerCase().trim() : "";
	var name = req.body.name ? req.body.name.trim() : "";
	var contact = req.body.contact ? req.body.contact : "";
	var address = req.body.address ? req.body.address : "";
	var password = req.body.password ? req.body.password : "";

	if(user_id == "") {
 		return res.send({ status: 201, msg: error.user_id_is_Required,data:[] }) 
    }else{
		var emailCondition = {$and: [ { _id: { $ne: mongoose.Types.ObjectId(user_id) } },{email:email},{status:{$in:[1,2,3]}} ]}
		var table_name=User;

		//check whether email exist or not
		adminModel.findData(table_name,emailCondition).then((userEmailData)=>{
			if(userEmailData.length==0){
				var ConditionContact = {$and: [ { _id: { $ne: mongoose.Types.ObjectId(user_id) } },{contact_no:contact},{status:{$in:[1,2,3]}} ]}
				//check whether contact exist or not
				adminModel.findData(table_name,ConditionContact).then((userContactData)=>{
					if(userContactData.length==0){
						var Condition = {_id:mongoose.Types.ObjectId(user_id)}
						adminModel.findOneData(table_name,Condition).then((userData)=>{
							if(!userData){
								return	res.send({ status: 201, msg:error.User_not_found,data:[] });
							}
							if(email=="")
							{
								email=userData.email
							}
							if(name=="")
							{
								name=userData.name
							}
							if(contact=="")
							{
								contact=userData.contact_no
							}
							if(address=="")
							{
								address=userData.address
							}
							if(password=="")
							{
								password = userData.password
							}else{
								password = bcrypt.hashSync(password,10)
							}
									
							var setUserData = {
								email:email,
								name: name,
								contact_no:contact,
								address:address,
								password:password,
							};

							adminModel.updateOneData(table_name,Condition,setUserData).then((userUpdate)=>{
								return	res.send({ status: 200, msg: error.Profile_updated_successfully,data:[]});
							}).catch((err)=>{	
								log('api_update_user_userUpdate_'+err,appDir+'/logs/'+helpers.current_date(4)+'_error_log.log'); //if error occur then find in logs folder by date 
								res.send({ status: 500, msg:error.internale_server_error ,data:[] })
							})

						}).catch((err)=>{	
							log('api_update_user_userData_'+err,appDir+'/logs/'+helpers.current_date(4)+'_error_log.log'); //if error occur then find in logs folder by date 
							res.send({ status: 500, msg:error.internale_server_error ,data:[] })
						})
					}else{
						return	res.send({ status: 201, msg: error.Contact_already_exist,data:[] })
					}
				}).catch((err)=>{	
					log('api_update_user_userContactData_'+err,appDir+'/logs/'+helpers.current_date(4)+'_error_log.log'); //if error occur then find in logs folder by date 
					res.send({ status: 500, msg:error.internale_server_error ,data:[] })
				})
			}else{
				return	res.send({ status: 201, msg: error.Email_already_exist,data:[] })
			}
		}).catch((err)=>{	
			log('api_update_user_userEmailData_'+err,appDir+'/logs/'+helpers.current_date(4)+'_error_log.log'); //if error occur then find in logs folder by date 
			res.send({ status: 500, msg:error.internale_server_error ,data:[] })
		})
	}
})


