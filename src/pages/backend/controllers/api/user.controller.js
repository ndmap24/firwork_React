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

const userModel = require("../db_model/user.model");
const helpers = require("../../helpers/helpers");
const service = require('../../services/service');
const error = require("../../util/error.json");
const tokenMiddleware = require("../../middleware/tokenMiddleware");
const { json } = require("express");

const router = express.Router(); 
JWT_SECRET = process.env.JWT_SECRET
var User = service.user;

var appDir = path.dirname(require.main.filename);

module.exports = router;

//-----------------  Auth  -----------------
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

/*this method used for single single document upload */
router.post('/file_upload', (req, res) => {
    if(!req.files) {
 		return res.send({ status: 201, msg: error.File_required,data:[] }) 
    }else{
    	var Files=req.files.file; 

	    var file_name = Files.name;
	    var filenewname = helpers.getUtcTimestamp();
	    var file_ext = ""; 
	    if (file_name != null && file_name != undefined) {
	        var temp = file_name.lastIndexOf('.');
	        file_ext = (temp < 0) ? '' : file_name.substr(temp);

	        filenewname ='document/' + filenewname + file_ext;

		    helpers.uploadNewfile(Files,"/uploads/",filenewname,function(flag,filepath){

		    	if(flag == true){
			 		return res.send({ status: 201, msg: error.failed,data:[] });
		    	}else{
		    		var documentRes = {
				    	filepath:  filenewname
				    }
			 		return res.send({ status: 200, msg: error.File_uploaded_successfully,data:documentRes });
		    	}	
			});   
	    }else {
			return res.send({ status: 201, msg: error.failed,data:[] });
	    }
	}
})

/* this method used for signup for the Seller and buyer */
router.post('/signup', (req, res) => {	
	var name = req.body.name ? req.body.name : "";
    var email = req.body.email ? req.body.email.toLowerCase().trim() : "";
    var password = req.body.password ? req.body.password : "";
	var contact = req.body.contact ? req.body.contact : "";
	var address = req.body.address ? req.body.address : "";
	var profileImage = req.body.profileImage ? req.body.profileImage : ""; //given path by front end
	var role = req.body.role ? req.body.role : "";  // 2=buyer, 3=seller
      
	if(role == "") {
		return res.send({ status: 201, msg: error.Role_is_required,data:[] }) 
	}else if(email == "") {
 		return res.send({ status: 201, msg: error.Email_is_required,data:[] }) 
    }else if (contact == "") {
 		return res.send({ status: 201, msg: error.contact_is_required,data:[] }) 
    }else if(name=="" || password=="" ){
        return res.send({ status: 201, msg: error.Fill_all_the_other_entry,data:[] }) 
    }else{
		var findCondition = {email:email,status:{$in:[1,2]}}
		var table_name = User;
		userModel.findOneData(table_name,findCondition).then((emailData)=>{
			if(emailData) { 
				return	res.send({ status: 201, msg: error.Email_is_already_registered_with_a_different_role,data:[] });
			}
			var findContactCondition = {contact_no:contact,status:{$in:[1,2]}}
			userModel.findOneData(table_name,findContactCondition).then((contactData)=>{
				if(contactData) { 
					return	res.send({ status: 201, msg: error.Mobile_no_is_already_registered_with_a_different_role,data:[] });
				}
				var userDatail = User({
					email: email,
					password:bcrypt.hashSync(password,10),
					name:name,
					contact_no:contact,
					role: role,// 2=buyer, 3=seller
					status: 1, //1-active
					address:address,
					profile_image:profileImage,
					created_on:new Date(),
					updated_on:new Date()
				});
				userModel.addData(userDatail).then((userData)=>{
					return res.send({ status: 200, msg: error.User_register_successfully,data:userData });
				}).catch((err)=>{	
					log('api_signup_userData_'+err,appDir+'/logs/'+helpers.current_date(4)+'_error_log.log'); //if error occur then find in logs folder by date 
					res.send({ status: 500, msg:error.internale_server_error ,data:[] })
				})
			}).catch((err)=>{	
				log('api_signup_contactData_'+err,appDir+'/logs/'+helpers.current_date(4)+'_error_log.log'); //if error occur then find in logs folder by date 
				res.send({ status: 500, msg:error.internale_server_error ,data:[] })
			})
		}).catch((err)=>{	
			log('api_signup_emailData_'+err,appDir+'/logs/'+helpers.current_date(4)+'_error_log.log'); //if error occur then find in logs folder by date 
			res.send({ status: 500, msg:error.internale_server_error ,data:[] })
		})
	}
})

/* this method used for login (Seller and buyer) */
router.post('/login', (req, res) => {	
    var password = req.body.password ? req.body.password.trim() : "";
	var email = req.body.email ? req.body.email.trim() : "";

	if(email==""){ 
		res.send({ status: 201, msg: error.Email_is_required,data:[] })
    }else if (password == "") {
		res.send({ status: 201, msg: error.Password_is_required,data:[] })  
	}else{
		var findCondition = { email:email,status:1}
        var table_name = User;
		userModel.findOneData(table_name,findCondition).then((dataUser)=>{
			if (!dataUser) { 
				res.send({ status: 201, msg: error.User_not_found,data:[] }) 
			}
			var passwordIsValid = bcrypt.compareSync(password, dataUser.password);	
			if (!passwordIsValid){
				return	res.send({ status: 201, msg:error.Invalid_credential,data:[] })	
			}
			var userRes = dataUser.toObject();
			delete userRes.password;
			//make user detail object for token generate
			const token_user = 	{
									exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24),
									_id: dataUser._id,
									user_name: userRes.name,
									contact_no: userRes.contact_no,
									email: userRes.email,
									role: userRes.role,
									date_time: new Date(),
								};
			//generate token with user detail
			let token = jwt.sign(JSON.stringify(token_user),JWT_SECRET);
			userRes.token = token;
			return	res.send({ status: 200, msg:error.Login_success ,data:userRes})
		}).catch((err)=>{	
			log('api_login_dataUser_'+err,appDir+'/logs/'+helpers.current_date(4)+'_error_log.log'); //if error occur then find in logs folder by date 
			res.send({ status: 500, msg:error.internale_server_error ,data:[] })
		})
    }
})

/*this method used for get the user details*/
router.post('/view_user_data',tokenMiddleware,(req, res) => {
	var userId = res.locals.userData.id ? res.locals.userData.id : "";  //fetch id by token
	
	if(userId==""){
        return res.send({ status: 201, msg: error.User_id_is_required,data:[] }) 
	}else{
		filter = {_id:mongoose.Types.ObjectId(userId)}
		table=User
        userModel.findOneData(table,filter).then((user_data)=>{
            if(!user_data){
                return res.send({ status: 201, msg: error.User_not_found,data:[] }) 
            }else{
                res.send({ status: 200, msg:error.success ,data:user_data })
            }
        }).catch((err)=>{	
            log('api_view_user_data_userData_'+err,appDir+'/logs/'+helpers.current_date(4)+'_error_log.log'); //if error occur then find in logs folder by date 
            res.send({ status: 500, msg:error.internale_server_error ,data:[] })
        })
	}
})

/*this method used for update the user details*/
router.post('/update_user',tokenMiddleware, (req, res) => {
	var userId = res.locals.userData.id ? res.locals.userData.id : ""; //fetch id by token
	var name = req.body.name ? req.body.name.trim() : "";
	var address = req.body.address ? req.body.address : "";
	var profile_image = req.body.profile_image ? req.body.profile_image : "";
	var password = req.body.password ? req.body.password : "";
	
	if(user_id == "") {
 		return res.send({ status: 201, msg: error.user_id_is_Required,data:[] }) 
    }else{
		Condition = {_id:mongoose.Types.ObjectId(user_id),status:1}
		table_name = User
		userModel.findOneData(table_name,Condition).then((userData)=>{
			if(!userData){
				return	res.send({ status: 201, msg:error.User_not_found,data:[] });
			}
			if(name==""){
				name=userData.name
			}
			if(address==""){
				address=userData.address
			}
			if(profile_image==""){
				profile_image=userData.profile_image
			}
			if(password==""){
				password=userData.password
			}else{
				password=bcrypt.hashSync(password,10)
			}
					
			var setUserData = {
				name: name,
				address:address,
				profile_image:profile_image,
				password:password,
				updated_on:new Date(),
			};

			userModel.updateOneData(table_name,Condition,setUserData).then((userUpdate)=>{
				return	res.send({ status: 200, msg: error.Profile_updated_successfully,data:[]});
			}).catch((err)=>{	
				log('api_update_user_userUpdate_'+err,appDir+'/logs/'+helpers.current_date(4)+'_error_log.log'); //if error occur then find in logs folder by date 
				res.send({ status: 500, msg:error.internale_server_error ,data:[] })
			})
		}).catch((err)=>{	
			log('api_update_user_userData_'+err,appDir+'/logs/'+helpers.current_date(4)+'_error_log.log'); //if error occur then find in logs folder by date 
			res.send({ status: 500, msg:error.internale_server_error ,data:[] })
		})
	}
})

/*this method used for delete the user accout */
router.post('/delete_account',tokenMiddleware, (req, res) => {
	var userId = res.locals.userData.id ? res.locals.userData.id : ""; //fetch id by token
	if(user_id == "") {
 		return res.send({ status: 201, msg: error.user_id_is_Required,data:[] }) 
    }else{
		Condition = {_id:mongoose.Types.ObjectId(user_id)}
		table_name = User
		var setUserData = {
			status: 3,  //delete
			updated_on:new Date(),
		};

		userModel.updateOneData(table_name,Condition,setUserData).then((userUpdate)=>{
			return	res.send({ status: 200, msg: error.User_deleted_successfully,data:[]});
		}).catch((err)=>{	
			log('api_update_user_userUpdate_'+err,appDir+'/logs/'+helpers.current_date(4)+'_error_log.log'); //if error occur then find in logs folder by date 
			res.send({ status: 500, msg:error.internale_server_error ,data:[] })
		})
	}
})