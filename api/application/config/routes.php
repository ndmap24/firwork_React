<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
| -------------------------------------------------------------------------
| URI ROUTING
| -------------------------------------------------------------------------
| This file lets you re-map URI requests to specific controller functions.
|
| Typically there is a one-to-one relationship between a URL string
| and its corresponding controller class/method. The segments in a
| URL normally follow this pattern:
|
|	example.com/class/method/id/
|
| In some instances, however, you may want to remap this relationship
| so that a different class/function is called than the one
| corresponding to the URL.
|
| Please see the user guide for complete details:
|
|	https://codeigniter.com/user_guide/general/routing.html
|
| -------------------------------------------------------------------------
| RESERVED ROUTES
| -------------------------------------------------------------------------
|
| There are three reserved routes:
|
|	$route['default_controller'] = 'welcome';
|
| This route indicates which controller class should be loaded if the
| URI contains no data. In the above example, the "welcome" class
| would be loaded.
|
|	$route['404_override'] = 'errors/page_missing';
|
| This route will tell the Router which controller/method to use if those
| provided in the URL cannot be matched to a valid route.
|
|	$route['translate_uri_dashes'] = FALSE;
|
| This is not exactly a route, but allows you to automatically route
| controller and method names that contain dashes. '-' isn't a valid
| class or method name character, so it requires translation.
| When you set this option to TRUE, it will replace ALL dashes in the
| controller and method URI segments.
|
| Examples:	my-controller/index	-> my_controller/index
|		my-controller/my-method	-> my_controller/my_method
*/
$route['default_controller'] = 'welcome';
$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;
// vendor signup route
$route['signup'] = 'User_controller/signup';

//*** vendor login***//
$route['login'] = 'User_controller/login';
$route['cards_character/(:any)'] = 'User_controller/cards_character/$i';

$route['cards_value/(:any)/(:any)'] = 'User_controller/cards_value/$i';
//*** vendor profile route***//
// $route['profile_data'] = 'Vendor_profile_controller/profile_data';
// //*** vendor update profile route***//
// $route['Update_vendor_profile'] = 'Vendor_profile_controller/Update_vendor_profile';
// $route['update_doc_img'] = 'Vendor_profile_controller/update_doc_img';
// //*** vendor change pasword route***//
// $route['change_password'] = 'Vendor_profile_controller/change_password';
// //*** vendor logout***//
// $route['logout'] = 'Vendor_profile_controller/logout';
// $route['verify_email'] = 'Vendor_profile_controller/verify_email';
// //*** add product***//
// $route['Add_product'] = 'Product_controller/Add_product';
// $route['Delete_product'] = 'Product_controller/Delete_product';

// $route['import_product'] = 'Product_controller/import_product';
// $route['export_product'] = 'Product_controller/export_product';



// $route['all_product'] = 'Product_controller/All_product';
// $route['Update_product'] = 'Product_controller/Update_product';
// $route['forgot_password'] = 'ForgotPassword_controller/forgot_password';
// $route['search_product'] = 'Product_controller/search_product';


// $route['search_stock'] = 'Product_controller/search_stock';
// // order api
// $route['All_order'] = 'Order_Controller/All_order';
// $route['my_order'] = 'Order_Controller/my_order';
// $route['order_status'] = 'Order_Controller/order_status';
// $route['generate_order'] = 'Order_Controller/generate_order';


// //chat api
// $route['add_chat'] = 'Chat_Controller/add_chat';
// $route['add_chat_image'] = 'Chat_Controller/add_chat_image';
// $route['get_all_order_chats'] = 'Chat_Controller/get_all_order_chats';
// // $route['get_chats'] = 'Chat_Controller/get_chats';
// $route['get_chats_msg'] = 'Chat_Controller/get_chats_msg';
// $route['get_chat_order'] = 'Chat_Controller/get_chat_order';
// $route['get_chats_data_order'] = 'Chat_Controller/get_chats_data_order';
// $route['add_chat_json'] = 'Chat_Controller/add_chat_json';



// //------------------------------Admin Route-----------------------
// $route['admin/login'] = 'admin/LoginController/login';
// $route['admin/check_login'] = 'admin/LoginController/check_login';

// $route['admin/dashboard'] = 'admin/DashboardController/dashboard';

// $route['admin/profile'] = 'admin/ProfileController/profile';
// $route['admin/update_profile_admin'] = 'admin/ProfileController/update_profile_admin';
// $route['admin/change_password'] = 'admin/ProfileController/change_password';
// $route['admin/logout'] = 'admin/ProfileController/logout';

// // admin vendor list
// $route['admin/vendor_list'] = 'admin/VendorController/vendor_list';
// $route['admin/vendor_delete/(:any)'] = 'admin/VendorController/vendor_delete/$i';
// $route['admin/vendor_view/(:any)'] = 'admin/VendorController/vendor_view/$i';

// //admin product list

// $route['admin/product_list'] = 'admin/ProductController/product_list';

// //pdfcontroller

// $route['pdf'] = 'GenPDF/pdf';
// $route['pdf_data'] = 'GenPDF/pdf_data';