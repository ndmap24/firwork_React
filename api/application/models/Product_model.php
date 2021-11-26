<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Product_model extends CI_Model {

  //*** add product model***//

	public function add_product($dataArray){

		$query =  $this->db->insert('products',$dataArray);
		return $query;

	}
 //*** get all product data model***//
	public function get_product_data($id){
		$this->db->select('*');
		$this->db->where('vendor_id', $id);
		$this->db->where('soft_delete','off');
		$this->db->order_by('products.id','desc');
		$query = $this->db->get('products');
		$row = $query->result_array();
		return $row;
	}

	public function search_product_data($id,$pro_name,$order)
	{
		if($order =='asc'){

// 			SELECT p.*,v.id as vid,v.company_country AS country 
// FROM products p
// LEFT JOIN vendors v ON v.id = p.vendor_id
// WHERE p.vendor_id = '3' AND p.name LIKE '%f%'
		// $sql = "SELECT vendors.company_country AS country,products.id,products.vendor_id as vendor_id, products.* FROM `products` LEFT JOIN vendors ON vendors.id = products.vendor_id WHERE name LIKE ''%".$pro_name."%' AND products.vendor_id = '$id' ORDER BY products.id ASC";

			$sql =	"SELECT p.*,v.id as vid,v.company_country AS country 
						FROM products p
						LEFT JOIN vendors v ON v.id = p.vendor_id
						WHERE p.vendor_id = '".$id."' AND p.name LIKE '%".$pro_name."%' ORDER BY p.id ASC";
		}else if($order =='desc'){
			$sql =	"SELECT p.*,v.id as vid,v.company_country AS country 
						FROM products p
						LEFT JOIN vendors v ON v.id = p.vendor_id
						WHERE p.vendor_id = '".$id."' AND p.name LIKE '%".$pro_name."%' ORDER BY p.id DESC";
		}else{
			$sql =	"SELECT p.*,v.id as vid,v.company_country AS country 
						FROM products p
						LEFT JOIN vendors v ON v.id = p.vendor_id
						WHERE p.vendor_id = '".$id."' AND p.name LIKE '%".$pro_name."%'";
		}

// print_r($sql);die;
              $query = $this->db->query($sql);
                    $row = $query->result_array();
                    return $row; 

	} 



	public function get_adminproduct_data(){
		$sql = "SELECT product.*,user.first_name FROM `product` LEFT JOIN `user` ON user.vendor_id = product.vendor_id";
		$query = $this->db->query($sql);
		$row = $query->result_array();
		return $row;
	}

	public function update_product($data,$id) {

		$this->db->where('id', $id);
		$query = $this->db->update('products', $data);
		return  $query;  

	}
	public function check_product($product_id){
		$this->db->select('*');
		$this->db->where('id', $product_id);
		$query = $this->db->get('products');
		$row = $query->row_array();
		return $row;
	}

   public function delete_product($product_id){
	$update_rows = array('soft_delete' => "on",);
      $this->db->where('id', $product_id);
      $query = $this->db->update('products',  $update_rows);
      return  $query;  
}

  public function getUserDetails($id){
 		$response = array();
		$this->db->select('name,expiry_months,availability,on_floor,slug,quantity,description');
		$this->db->where('vendor_id', $id);
		$q = $this->db->get('products');
		$response = $q->result_array();
	 	return $response;
	}

	


 // public function search_product_stock($id,$name1,$name2,$country)
 // {
 // 	 $sql = "SELECT products.*,vendors.company_name,vendors.company_country,customers.type FROM products LEFT JOIN vendors ON vendors.id = products.vendor_id LEFT JOIN customers ON customers.vendor_id = products.vendor_id WHERE products.name LIKE '%$name1%' OR products.name  LIKE '%$name2%' OR vendors.company_country LIKE '%$country%' AND products.quantity != 0 AND products.vendor_id = '$id'";
 // 	 $query = $this->db->query($sql);
 //     $row = $query->result_array();
 //     return $row; 

 // }

 public function search_product_stock($id,$name,$country,$quantity)
 {
		// SELECT products.name as products_name, products.quantity as products_quantity,vendors.company_country as vendors_company_country,customers.type,products.vendor_id as products_vendor_id FROM products LEFT JOIN vendors ON vendors.id = products.vendor_id LEFT JOIN customers ON customers.vendor_id = products.vendor_id WHERE products.vendor_id != 83 AND products.name LIKE '%Ajay%' AND vendors.company_country LIKE '%INDIA%'  AND products.quantity >= '1'

	 $sql =	"SELECT products.*,vendors.company_country as vendors_company_country,vendors.company_name as vendors_company_name,customers.type as customer_type,products.vendor_id as products_vendor_id FROM products LEFT JOIN vendors ON vendors.id = products.vendor_id LEFT JOIN customers ON customers.vendor_id = products.vendor_id WHERE products.vendor_id != '".$id."' AND products.soft_delete= 'off' AND products.name LIKE '%".$name."%' AND vendors.company_country LIKE '%".$country."%'";

 	 $query = $this->db->query($sql);
     $row = $query->result_array();
     return $row; 

 }



}


