<?php
class CommonModel extends CI_Model
{
	function __construct()
	{
		parent::__construct();
		$this->load->library( 'Utility' );
	}

	//fetch all data api
	public function selectResultData($table,$fieldName)
	{
		$this->db->select('*')
		->from($table);
		$this->db->order_by($fieldName, "desc");
		return $this->db->get()->result_array();
	}

	//select all data asc
	public function selectAllResultData($table)
	{
		$this->db->select('*')
		->from($table);
		return $this->db->get()->result_array();
	}

	public function countData($table)
	{
		return $this->db->count_all_results($table);
	}
	public function countDataWithCondition($table,$condition)
	{
		return $this->db->where($condition)->from($table)->count_all_results();
	}
	public function totalColumnSumWithCondition($table,$condition,$param)
	{
		$this->db->select('SUM('.$param.') as rate');
        $this->db->from($table);
        $result = $this->db->get()->row();
        // return $this->db->last_query();
        return $result;
	}

	//check condition api
	public function selectRowDataByCondition($condition,$table)
	{
		$this->db->select('*')
		->from($table);
		$this->db->where($condition);
		return $this->db->get()->row();
	}
	
	
	
	//check condition api
	public function selectRowDataByCondition_resume($condition,$table)
	{
		$this->db->select('*')
		->from($table);
		$this->db->where($condition);
		return $this->db->get()->result_array();
	}
	//check condition api
	public function selectRowDataByConditionAndFieldName($condition,$table,$fieldName)
	{
		$this->db->select('*')
		->from($table);
		$this->db->where($condition);
		$this->db->order_by($fieldName, "desc")->limit(1);
		return $this->db->get()->row();
	}
	
	//get all data with where condition api
	public function selectResultDataByCondition($condition,$table)
	{
		$this->db->select('*')
		->from($table);
		$this->db->where($condition);
		return $this->db->get()->result();
	}

	public function selectResultDataByCondition1($condition,$table)
	{
		// print_r($condition);
		$this->db->select('*')
		->from($table);
		$this->db->where($condition);
		$data = $this->db->get();
		// print_r($data);
		if (!empty($data->result_array())) {
			return $data->result_array();
		}
	}
	
	//get all data with where condition api
	public function selectResultDataByConditionAndFieldName($condition,$table,$fieldName)
	{
		$this->db->select('*')
		->from($table);
		$this->db->order_by($fieldName, "desc");
		$this->db->where($condition);
		return $this->db->get()->result_array();
	}




	//insert api
	public function insertData($data,$table)
	{
		$result = $this->db->insert($table, $data);
		
		if( $result != FALSE )
		{
			return $this->db->insert_id();
		}
		else
		{
			return FALSE;
		} 	
	}

	//update condition api
	public function updateRowByCondition($condition,$table,$data)
	{  
		//echo $this->email->print_debugger();
		return $this->db->update($table, $data , $condition);
	}
	//update condition api
	public function updateRow($table,$data)
	{  
		//echo $this->email->print_debugger();
		return $this->db->update($table, $data);
	}

	public function update_entry($table,$data,$where)
	{
	    $this->db->where($where);
	    $query = $this->db->update($table,$data);
	    return $this->db->affected_rows();
	}
	
   public function sendMail1($data)
   {
   	// print_r($data);exit;
   	    $this->email->initialize(array(
			'protocol' 	=> 'smtp',
			'smtp_host' => 'smtp.sendgrid.net',
			'smtp_user' => 'neeteshagrawal',
			'smtp_pass' => 'neetesh@12345',
			'smtp_port' => 587,
			'crlf' 		=> "\r\n",
			'mailtype' 	=> "html",
			'charset' 	=> "iso-8859-1",
			'newline' 	=> "\r\n"
		));

		$this->email->from('info@pueodj.com', 'Pueo Dj');
		$this->email->to($data['to']);
		//$this->email->cc('another@another-example.com');
		//$this->email->bcc('them@their-example.com');
		$this->email->subject($data['subject']);
		$this->email->message($data['message']);
		if($this->email->send())
		{
			return 1;
		}else{
			return 0;
		}
   	}


   	public function sendMail($to,$subject,$message,$options = array())
    {
    	// print_r($to);die;
        $this->load->library('email');
        $config = array (
		        'mailtype' => 'html',
		        'charset'  => 'utf-8',
		        'priority' => '1'
	      	);

        $this->email->initialize($config);
		if (isset($options['fromEmail']) && isset($options['fromName'])) 
		{
			$this->email->from($options['fromEmail'], $options['fromName']);  
		}
		else
		{
			$this->email->from('info@sliceledger.com', 'DJ');         
        }

		$this->email->to($to);

		if(isset($options['replyToEmail']) && isset($options['replyToName']))
		{
			$this->email->reply_to($options['replyToEmail'],$options['replyToName']);
		}

	    $this->email->subject($subject);
	    $this->email->message($message);

     // echo $message;die();

        if($this->email->send())
        {
            return true;
        }else
        {
            return false;
        }
    } 
	//delete api
	public function delete($condition,$table)
	{
		$this->db->where($condition);
		return $this->db->delete($table);
	}

    public function getsingle($table,$where)
     {
        $this->db->where($where);
        $data = $this->db->get($table);
        $get = $data->row();
         
        $num = $data->num_rows();
        
        if($num)
        {
          return $get;
        }
        else
        {
          return false;
        }
    }
    public function select_single_row($sql)
    {
        $res= $this->db->query($sql);
        return $res->row();
    }

    public function adminData($data)
    {
        $this->db->select("*")->from('admin')->where(array(
                            'password' 		 	=> md5($data['password']),
                            'actual_password' 	=> $data['password'],
                            'email' 			=> $data['email'],
                            'designation' 		=> 1,
                        ));
                        
          return  $this->db->get()->row();
    }

   


	
}

