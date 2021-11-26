<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class User_controller extends CI_Controller {

    public function __construct()
    {
        parent::__construct();
        $this->load->helper(array('form', 'url', ));
        $this->load->library('form_validation');
        $this->load->database('');
        $this->load->helper('date');
        $this->load->model('vendor_model');
        $this->form_validation->set_error_delimiters('', '');

        //   date_default_timezone_set("UTC");
    }

//*******signup api start***********//

    public function signup()
    {
        // echo 1;die;
        $email_check = $this->vendor_model->checkEmail($this->input->post('email'));
        if($email_check) {
            $status=400;
            $message="Email already exists please signin";
            //dataArray$data =$this->Common_model->getRowArray($user_data);
            echo json_encode(array("status"=>$status, "message"=>$message));
            return;
        }

        $email = $this->input->post('email');

        $dataArray = array(

            'email'=>$email,

        ); 


        $addUser = $this->vendor_model->add_user($dataArray);
        // print_r($addUser);die();



        if($addUser)
        {       $status=200;
            $message="Your registration succesfully.Now you can login";
            echo json_encode(array("status"=>$status, "message"=>$message));

        }else
        {
            $status=400;
            $message="Error Occured.";
            echo json_encode(array("status"=>$status, "message"=>$message));
        }

    }


    public function verify_email()
    {
        $vendor_id =   base64_decode($this->input->get('id'));
        $update_status = $this->Vendor_model->update_status($vendor_id);



        // update email verify status code

        $userDetail = $this->Vendor_model->get_user_detail($vendor_id);


        $email_id = $userDetail['email'];
        $user_id  = $userDetail['id'];
        $msg  = 'Thank you . Your email id verify Successfully.Now You can login now';
        // print_r($id);die;
        $this->load->view('email_template/thankyou',
        array(
            'msg'  =>  $msg,
            'email_id'  =>  $email_id,
            'id'    =>  $user_id,
            'name'      =>  $userDetail['first_name'].' '.$userDetail['last_name']
        ));
    }


    public function login(){

        $this->form_validation->set_rules('email', 'Email', 'required');
        if ($this->form_validation->run() == FALSE)
        {
            $status=400;
            $message=validation_errors();
            echo json_encode(array("status"=>$status, "message"=>$message));
            return;
        }


        $email = $this->input->post('email');
        $dataArray = array('email'=>$email );


        $data = $this->vendor_model->checkVendorDetail($email);

        if($data) 
        {
            $status=200;
            $message="Successfully login.";

            echo json_encode(array("status"=>$status, "message"=>$message));
            return;

        }else
        {
            $status=1;
            $message="Invalid email and password.";
            echo json_encode(array("status"=>$status, "message"=>$message));
        }

    }

    public function cards_character(){

        $rank_data =  $this->vendor_model->fetch_rank_data();
        $arr_rank = array();
        $arr_charcter = array();
        // $arr_charcter = array();

        if(!empty($rank_data)){
            foreach ($rank_data as $key => $value) {
                $arr_rank[]=array(
                'rank_id' => $value['rank_id'],
                'rank_name' => $value['rank_name']
                );
            }
            $data['rank'] = $arr_rank;
        }else{
            $data['rank'] = array();
        }
 
        $rid =  $this->uri->segment(2);
         // $cid =  $this->uri->segment(3);
       
        $character_data = $this->vendor_model->fetch_cards_character($rid);

        if(!empty($character_data)){
            foreach ($character_data as $k) {
                $arr_charcter[] = array(
                    'character_value'         =>  $k['value'],
                    'character_name'         =>  $k['character_name'],
                    'character_id'         =>  $k['character_id'],
               );  
            }

            $data['charcter'] = $arr_charcter;
        }else{
            $data['charcter'] = array();
        }
         
        // $data['rank'] = $arr_rank;
        // $data['charcter'] = $arr_charcter;

        if(!empty($data)){
            $status=200;
            $message="successfully";
            //dataArray$data =$this->Common_model->getRowArray($user_data);
            echo json_encode(array("status"=>$status, "message"=>$message,'data'=>$data, 'rid' => $rid));
            return;
        }else{
            $status=400;
            $message="No data found";
            //dataArray$data =$this->Common_model->getRowArray($user_data);
            echo json_encode(array("status"=>$status, "message"=>$message));
            return;
        }

    }

    public function cards_value(){

         $rid =  $this->uri->segment(2);
         $cid =  $this->uri->segment(3);

         $rank_data =  $this->vendor_model->fetch_rank_value($rid,$cid);
         if(!empty($rank_data)){
            $status=200;
            $message="successfully";
            //dataArray$data =$this->Common_model->getRowArray($user_data);
            echo json_encode(array("status"=>$status, "message"=>$message,'data'=>$rank_data, 'rid' => $cid));
            return;
        }else{
            $status=400;
            $message="No data found";
            //dataArray$data =$this->Common_model->getRowArray($user_data);
            echo json_encode(array("status"=>$status, "message"=>$message));
            return;
        }

    }
}


