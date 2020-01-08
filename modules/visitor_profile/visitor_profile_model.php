
<?php
require_once 'include/php/model.php';
    class visitor_profile_model extends model{
        public function __construct(){
        parent:: __construct();
        }
     public function get_signin($name,$pass){
        $name = $_POST['name'];
        $pass = $_POST['pass'];
        $sql = "SELECT id,name,pass,email,tel,addr,act FROM `member_profile` WHERE name = '$name' AND pass ='$pass'";
        $stmt=$this->conn->prepare($sql);
        $result=$stmt->execute();
        if ($result) {//isset 是否存在
            $ds = $stmt->fetchAll(PDO::FETCH_ASSOC);
            $return_value['status_code'] = 0;
            $return_value['status_message'] = 'Execute Success';
            $return_value['data_set'] = $ds;
            //$return_value['id'] = $id;
            $return_value['name'] = $name;
            $return_value['pass'] = $pass;
        } else {
            $return_value['status_code'] = -1;
            $return_value['status_message'] = 'Execute Error';
            $return_value['sql'] = $sql;
        }
        return $return_value;
    }
}
?>