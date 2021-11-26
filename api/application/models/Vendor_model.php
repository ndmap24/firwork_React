<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Vendor_model extends CI_Model {

  //*** add vendor model***//

	public function add_user($dataArray){

   $query =  $this->db->insert('users',$dataArray);
   return $this->db->insert_id();

 }
 public function add_customers($dataArray){

   $query =  $this->db->insert('customers',$dataArray);
   return $this->db->insert_id();

 }


 public function add_chats($dataArray){

   $query =  $this->db->insert('chats',$dataArray);
   return $this->db->insert_id();

 }

//*** fetch single record using login model***//
 public function single_record($email,$password){

   $this->db->select('*');
   $this->db->where('email', $email);
   $this->db->where('password', $password);
   $query = $this->db->get('vendors');
   $row = $query->row_array(); // it will only one row.
   return $row;
 }

  public function checkVendorDetail($email){

   $this->db->select('*');
   $this->db->where('email', $email);
   // $this->db->where('password', $password);
   $query = $this->db->get('users');
   $row = $query->row_array(); // it will only one row.
   return $row;
 }

  public function fetch_cards_character($id = 1){

   $sql = "SELECT copper_material_cards.card_name as card_name,cards_character.name as character_name,rank.name as rank_name,cards_character.id as character_id,character_value.value FROM `character_value` LEFT JOIN copper_material_cards ON copper_material_cards.id = character_value.card_mat_id LEFT JOIN cards_character ON cards_character.id = character_value.card_char_id LEFT JOIN rank ON rank.id = character_value.rank_id WHERE rank_id = '$id' and copper_material_cards.id=1";
   
   // $this->db->where('password', $password);
   $query = $this->db->query($sql);
   $row = $query->result_array(); // it will only one row.
   return $row;
 }

 public function fetch_rank_value($rid = 1,$cid = 1){

   $sql = "SELECT copper_material_cards.card_name as card_name,cards_character.name as character_name,rank.name as rank_name,character_value.value FROM `character_value` LEFT JOIN copper_material_cards ON copper_material_cards.id = character_value.card_mat_id LEFT JOIN cards_character ON cards_character.id = character_value.card_char_id LEFT JOIN rank ON rank.id = character_value.rank_id WHERE rank_id = '$rid' and cards_character.id = '$cid' and copper_material_cards.id =1";
   
   // $this->db->where('password', $password);
   $query = $this->db->query($sql);
   $row = $query->result_array(); // it will only one row.
   return $row;
 }


 public function fetch_rank_data(){

   $this->db->select('id as rank_id,name as rank_name');
   // $this->db->where('card_id', 1);
   // $this->db->where('password', $password);
   $query = $this->db->get('rank');
   $row = $query->result_array(); // it will only one row.
   return $row;
 }




//*** get profile data with token_id model***//

 public function get_profile_data($token){
  $this->db->select('*');
  $this->db->where('id', $token);
  $query = $this->db->get('vendors');
  $row = $query->row_array();
  return $row;
}


 public function getRowArray($id){
  $this->db->select('*');
  $this->db->where('id', $id);
  $query = $this->db->get('chats');
  $row = $query->row_array();
  return $row;
}

 public function get_product_data($token){
  $this->db->select('*');
  $this->db->where('token_id', $token);
  $query = $this->db->get('user');
  $row = $query->row_array();
  return $row;
}

//*** check mail condition model***//

public function checkEmail($email){
  $this->db->select('*');
  $this->db->where('email', $email);
  $query = $this->db->get('users');
  $row = $query->row_array();// it will return all rows.
  return $row;

      }

//*** update data model***//

      public function update($data,$id) {

        $this->db->where('vendor_id', $id);
        $query = $this->db->update('user', $data);
        return  $query;  

      }

//*** update profile data model***//
      public function update_profile($data,$id) {

        $this->db->where('id', $id);
        $query = $this->db->update('vendors', $data);
        return  $query;  

      }

//*** check password  model***//
      public function check_password($token_id,$old_password) {
        $this->db->select('*');
        $this->db->where('id', $token_id);
        $this->db->where('password', $old_password);
        $query = $this->db->get('vendors');
        $row = $query->row_array();
        return  $row;  

      }

      //*** update upload image model***//

      public function upload_image($image_data,$num,$path1)
      {
        $image = md5(date("d-m-y:h:i s"))."_".$num;
        if(is_array($image_data)) 
        {
          $file_name = pathinfo(@$image_data['name'], PATHINFO_FILENAME);
          $extension = pathinfo(@$image_data['name'], PATHINFO_EXTENSION);  

          if(move_uploaded_file(@$image_data['tmp_name'], $path1.''. $image.'.'.$extension)){
            $image = $image.'.'.$extension;

          }else{
            $image = Null;
          }

        }
        return $image;
      }

      public function upload_chatimage($image_data,$num,$path1)
      {
        $image = md5(date("d-m-y:h:i s"))."_".$num;

        // print_r($image);die;
        if(is_array($image_data)) 
        {
          $file_name = pathinfo(@$image_data['name'], PATHINFO_FILENAME);
          $extension = pathinfo(@$image_data['name'], PATHINFO_EXTENSION);  

          if(move_uploaded_file(@$image_data['tmp_name'], $path1.''. $image_data['name'].'.'.$extension)){
            $image = $image.'.'.$extension;

          }else{
            $image = Null;
          }

        }

        // print_r($image);die;
        return $image;
      }

      public function get_user_detail($id){
      $this->db->select('*');
      $this->db->where('id', $id);
      $query = $this->db->get('vendors');
      $row = $query->row_array();
      return $row;
    }
    
    public function update_status($vendor_id){
      $update_rows = array('status' => 'verified');
      $this->db->where('id', $vendor_id);
      $query = $this->db->update('vendors',  $update_rows);
      return  $query;  

    }

    public function update_password($vendor_id,$dataArray){
       $this->db->where('id', $vendor_id);
        $query = $this->db->update('vendors', $dataArray);
        return  $query;  

    }

     public function update_delete_status($vendor_id){
      $update_rows = array('is_delete' => "deleted",);
      $this->db->where('vendor_id', $vendor_id);
      $query = $this->db->update('user',  $update_rows);
      return  $query;  

    }

    //export csv
    function fetch_csv()
     {
    $this->db->select("*");
    $this->db->from('user');
    return $this->db->get();
   }

   // new functions

   public function get_vendor_data($id){
    $this->db->select('*');
    $this->db->where('id', $id);
    $query = $this->db->get('vendors');
    $row = $query->row_array();
    return $row;
  }

 // public function get_order_data($id){
 //    $sql = "SELECT vendors.id AS vendor_id,vendors.first_name AS v_fname,vendors.last_name AS v_lname,vendors.company_name AS v_companyname,vendors.company_address AS v_companyaddress,vendors.company_country AS v_companycountry,vendors.email AS v_email,vendors.phone AS v_phone,payments.invoice_id,pdfs.pdf_name,orders.*,orders.id AS order_id,products.name AS product_name,customers.id AS customer_id,customers.first_name AS c_fname,customers.last_name AS c_lname,customers.email AS c_email,customers.phone AS c_phone FROM `orders`
 //                   LEFT JOIN payments ON payments.id = orders.payment_id
 //                   LEFT JOIN pdfs ON pdfs.vendor_id = orders.vendor_id
 //                   LEFT JOIN vendors ON vendors.id = orders.vendor_id
 //                   LEFT JOIN customers ON customers.id = orders.customer_id
 //                   LEFT JOIN products ON products.id = orders.product_id
 //                   WHERE orders.vendor_id = '$id' ";
 //    $query = $this->db->query($sql);
 //    $row = $query->result_array();
 //    return $row;
 //  }
  public function get_order_data($id,$filter_type){
  if($filter_type =='1'){
    $sql = "SELECT orders.status as order_status,vendors.id AS vendor_id,vendors.first_name AS v_fname,vendors.last_name AS v_lname,vendors.company_name AS v_companyname,vendors.company_address AS v_companyaddress,vendors.company_country AS v_companycountry,vendors.email AS v_email,vendors.phone AS v_phone,payments.invoice_id,pdfs.pdf_name,orders.*,orders.id AS order_id,products.name AS product_name,customers.id AS customer_id,customers.first_name AS c_fname,customers.last_name AS c_lname,customers.email AS c_email,customers.phone AS c_phone,vc.company_name as vc_company_name,customers.type as customers_type,products.added as product_added_date  FROM `orders`
                   LEFT JOIN payments ON payments.id = orders.payment_id
                   LEFT JOIN pdfs ON pdfs.vendor_id = orders.vendor_id
                   LEFT JOIN vendors ON vendors.id = orders.vendor_id
                   LEFT JOIN customers ON customers.id = orders.customer_id
                   LEFT JOIN vendors vc ON vc.id = customers.vendor_id
                   LEFT JOIN products ON products.id = orders.product_id
                   WHERE orders.status = 'processing' AND orders.vendor_id = '$id' 
                   GROUP BY orders.id";
  }else if($filter_type =='2'){
    $sql = "SELECT orders.status as order_status,vendors.id AS vendor_id,vendors.first_name AS v_fname,vendors.last_name AS v_lname,vendors.company_name AS v_companyname,vendors.company_address AS v_companyaddress,vendors.company_country AS v_companycountry,vendors.email AS v_email,vendors.phone AS v_phone,payments.invoice_id,pdfs.pdf_name,orders.*,orders.id AS order_id,products.name AS product_name,customers.id AS customer_id,customers.first_name AS c_fname,customers.last_name AS c_lname,customers.email AS c_email,customers.phone AS c_phone,vc.company_name as vc_company_name,customers.type as customers_type ,products.added as product_added_dateFROM `orders`
                   LEFT JOIN payments ON payments.id = orders.payment_id
                   LEFT JOIN pdfs ON pdfs.vendor_id = orders.vendor_id
                   LEFT JOIN vendors ON vendors.id = orders.vendor_id
                   LEFT JOIN customers ON customers.id = orders.customer_id
                   LEFT JOIN products ON products.id = orders.product_id
                    WHERE orders.status = 'completed' AND orders.vendor_id = '$id' 
                    GROUP BY orders.id";
  }else if($filter_type =='3'){
    $sql = "SELECT orders.status as order_status,vendors.id AS vendor_id,vendors.first_name AS v_fname,vendors.last_name AS v_lname,vendors.company_name AS v_companyname,vendors.company_address AS v_companyaddress,vendors.company_country AS v_companycountry,vendors.email AS v_email,vendors.phone AS v_phone,payments.invoice_id,pdfs.pdf_name,orders.*,orders.id AS order_id,products.name AS product_name,customers.id AS customer_id,customers.first_name AS c_fname,customers.last_name AS c_lname,customers.email AS c_email,customers.phone AS c_phone,vc.company_name as vc_company_name,customers.type as customers_type,products.added as product_added_date FROM `orders`
                   LEFT JOIN payments ON payments.id = orders.payment_id
                   LEFT JOIN pdfs ON pdfs.vendor_id = orders.vendor_id
                   LEFT JOIN vendors ON vendors.id = orders.vendor_id
                   LEFT JOIN customers ON customers.id = orders.customer_id
                   LEFT JOIN vendors vc ON vc.id = customers.vendor_id
                   LEFT JOIN products ON products.id = orders.product_id
                  WHERE orders.status = 'canceled' AND orders.vendor_id = '$id' 
                  GROUP BY orders.id";
  }else{
    $sql = "SELECT orders.status as order_status,vendors.id AS vendor_id,vendors.first_name AS v_fname,vendors.last_name AS v_lname,vendors.company_name AS v_companyname,vendors.company_address AS v_companyaddress,vendors.company_country AS v_companycountry,vendors.email AS v_email,vendors.phone AS v_phone,payments.invoice_id,pdfs.pdf_name,orders.*,orders.id AS order_id,products.name AS product_name,customers.id AS customer_id,customers.first_name AS c_fname,customers.last_name AS c_lname,customers.email AS c_email,customers.phone AS c_phone,vc.company_name as vc_company_name,customers.type as customers_type,products.added as product_added_date FROM `orders`
                   LEFT JOIN payments ON payments.id = orders.payment_id
                   LEFT JOIN pdfs ON pdfs.vendor_id = orders.vendor_id
                   LEFT JOIN vendors ON vendors.id = orders.vendor_id
                   LEFT JOIN customers ON customers.id = orders.customer_id
                   LEFT JOIN vendors vc ON vc.id = customers.vendor_id
                   LEFT JOIN products ON products.id = orders.product_id
                   WHERE orders.vendor_id = '$id' 
                   GROUP BY orders.id";
  }
// print_r($sql);die;
    $query = $this->db->query($sql);
    $row = $query->result_array();
    return $row;
  }

   public function get_order_detail($order_id){
    $sql = "SELECT orders.status as order_status,vendors.id AS vendor_id,vendors.first_name AS v_fname,vendors.last_name AS v_lname,vendors.company_name AS v_companyname,vendors.company_address AS v_companyaddress,vendors.company_country AS v_companycountry,vendors.email AS v_email,vendors.phone AS v_phone,payments.invoice_id,pdfs.pdf_name,orders.*,orders.id AS order_id,products.name AS product_name,customers.id AS customer_id,customers.first_name AS c_fname,customers.last_name AS c_lname,customers.email AS c_email,customers.phone AS c_phone,vc.company_name as vc_company_name,customers.type as customers_type,products.added as product_added_date,products.availability as product_availability FROM `orders`
                   LEFT JOIN payments ON payments.id = orders.payment_id
                   LEFT JOIN pdfs ON pdfs.vendor_id = orders.vendor_id
                   LEFT JOIN vendors ON vendors.id = orders.vendor_id
                   LEFT JOIN customers ON customers.id = orders.customer_id
                   LEFT JOIN vendors vc ON vc.id = customers.vendor_id
                   LEFT JOIN products ON products.id = orders.product_id
                   WHERE orders.id = '$order_id' 
                   GROUP BY orders.id";
  
// print_r($sql);die;
    $query = $this->db->query($sql);
    $row = $query->row_array();
    return $row;
  }


  public function get_chats($id,$order_id)
  {
      $sql = "SELECT chats.*,orders.id as order_id,orders.added as order_date,orders.status as order_status,customers.first_name as sender_fname,customers.last_name as sender_lname,vendors.first_name as fname,vendors.last_name as lname  
                  FROM `chats`  
                  LEFT JOIN orders ON orders.id = chats.order_id
                  LEFT JOIN customers ON customers.id = chats.customer_id
                  LEFT JOIN vendors ON vendors.id = chats.vendor_id
                   -- LEFT JOIN vendors ON vendors.id = chats.order_id
                   -- WHERE chats.sender_id = '$id' 
                   -- WHERE chats.customer_id = '$id' AND chats.order_id = '$order_id'
                  WHERE chats.order_id = '$order_id'
                   -- GROUP BY chats.id
                  -- ORDER BY chats.id DESC
                  ";
    // print_r($sql);die;
             $query = $this->db->query($sql);
                      $row = $query->result_array();
                      return $row;
  }

  public function get_chats_data($order_id,$sender_id)
  {
      $sql = "SELECT chats.*,orders.id as order_id,orders.added as order_date,orders.status as order_status,products.name as product_name,products.availability as product_availability FROM `chats`
                     
                     LEFT JOIN orders ON orders.id = chats.order_id
                     LEFT JOIN products ON products.id = orders.product_id
                     -- LEFT JOIN customers ON customers.id = chats.vendor_id
                     WHERE chats.sender_id = '$sender_id' AND chats.order_id = '$order_id'
                     GROUP BY chats.id";


                     // print_r($sql);die();
    
             $query = $this->db->query($sql);
                      $row = $query->row_array();
                      return $row;
  }

  public function get_chats_order_data($vendor_id)
  {
      $sql = "SELECT chats.*,orders.id as order_id,orders.added as order_date,orders.status as order_status,customers.first_name as sender_fname,customers.last_name as sender_lname,vendors.first_name as fname,
          vendors.last_name as lname 
          FROM multivendor.chats 
          LEFT JOIN multivendor.orders ON orders.id = chats.order_id
          LEFT JOIN multivendor.customers ON customers.id = chats.customer_id
          LEFT JOIN multivendor.vendors ON vendors.id = chats.vendor_id
          where chats.vendor_id='$vendor_id' 
          GROUP BY chats.order_id DESC ORDER BY chats.id DESC";
    
             $query = $this->db->query($sql);
             $row = $query->result_array();
             return $row;
  }


  public function invoice_product_detail($id){
    // $sql = "SELECT products.name AS product_name,products.quantity As product_quantity,products.slug As product_slug,products.description As product_description,products.expiry_months,products.availability orders.id AS order_id FROM `orders` LEFT JOIN products ON products.id = orders.product_id
    //                WHERE orders.payment_id = '$id'"; 
    $sql ="SELECT products.*,orders.payment_id,vendors.company_name AS v_company_name,vendors.first_name AS v_name,vendors.email AS v_email,vendors.phone AS v_phone,vendors.company_address AS v_address,orders.added AS order_date,orders.id AS order_id,orders.status as order_status FROM orders INNER JOIN products ON products.id=orders.product_id INNER JOIN vendors ON vendors.id = products.vendor_id where orders.payment_id = '$id' ORDER BY products.id DESC";
           $query = $this->db->query($sql);
                    $row = $query->result_array();
                    return $row;
}

  public function invoice($id){
   
    $sql ="SELECT pdfs.*,payments.invoice_id,payments.customer_id,vendors.company_country AS company_country,customers.first_name,customers.last_name,customers.address,customers.phone,customers.email,customers.type,vendors.company_name FROM pdfs INNER JOIN payments ON pdfs.payment_id=payments.id INNER JOIN customers ON customers.id=payments.customer_id INNER JOIN vendors ON vendors.id = pdfs.vendor_id where customers.id = '$id' ORDER BY pdfs.id DESC";
     $query = $this->db->query($sql);
     $row = $query->result_array();
     return $row;
 }

   public function order_status($id,$status){
     if($status == 1) {
         $update_rows = array('status' => 'processing');
     }
      else if($status == 2) {
         $update_rows = array('status' => 'completed');
     }
     else if($status == 3) {
         $update_rows = array('status' => 'canceled');
     }
      $this->db->where('id', $id);
      $query = $this->db->update('orders',  $update_rows);
      return  $query;  
  }


public function add_order($dataArray){

   $query =  $this->db->insert('orders',$dataArray);
   return $this->db->insert_id();
 }
 public function add_payment($dataArray){

   $query =  $this->db->insert('payments',$dataArray);
   return $this->db->insert_id();
 }

 public function add_pdf($dataArray){

   $query =  $this->db->insert('pdfs',$dataArray);
   return $this->db->insert_id();
 }

 public function find_vendor($id){
  $this->db->select('vendor_id');
  $this->db->where('id', $id);
  $query = $this->db->get('products');
  $row = $query->row_array();
  return $row;
 }
public function find_customer($id){
  $this->db->select('id');
  $this->db->where('vendor_id', $id);
  $query = $this->db->get('customers');
  $row = $query->row_array();
  return $row;
 }

 public function find_seller_vendor($id){
  $this->db->select('product_id,vendor_id');
  $this->db->where('vendor_id', $id);
  $query = $this->db->get('orders');
  $row = $query->row_array();
  return $row;
 }

 public function find_seller_company($id){
  $this->db->select('company_name');
  $this->db->where('id', $id);
  $query = $this->db->get('vendors');
  $row = $query->row_array();
  return $row;
 }


 public function selectRowDataByCondition($condition,$table)
  {
    $this->db->select('*')
    ->from($table);
    $this->db->where($condition);
    return $this->db->get()->row();
  }




    }


