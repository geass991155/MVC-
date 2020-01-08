<?php
require_once 'include/php/model.php';
    class member_profile_model extends model{
        public function __construct(){
        parent:: __construct();
        }
    
    public function get_all_member($id){
        $sql="SELECT * FROM member_profile";
        $stmt=$this->conn->prepare($sql);//this一個是變數，一個這裡執行
        $result=$stmt->execute();
        
        if ($result) {
            $ds = $stmt->fetchAll(PDO::FETCH_ASSOC);
            $return_value['status_code'] = 0;//成功為0
            $return_value['status_message'] = 'Execute Success';//成功訊息
            $return_value['data_set'] = $ds;//資料庫的內容
            $return_value['id'] = $id; //取id值
        } else {
            $return_value['status_code'] = -1;//失敗為-1
            $return_value['status_message'] = 'SQL Execute Error';//失敗訊息
            $return_value['sql'] = $sql;
        }
        return $return_value;
    }
     public function get_all_member_delect($id){
        $sql = "DELETE FROM `member_profile` WHERE id='$id'";
        $stmt=$this->conn->prepare($sql);
        $result=$stmt->execute();
        
        if ($result) {
            $ds = $stmt->fetchAll(PDO::FETCH_ASSOC);
            $return_value['status_code'] = 0;
            $return_value['status_message'] = 'Execute Success';
            $return_value['data_set'] = $ds;
            $return_value['id'] = $id;
        } else {
            $return_value['status_code'] = -1;
            $return_value['status_message'] = 'Execute Error';
            $return_value['sql'] = $sql;
        }
        return json_encode($return_value);
     }
     
     public function get_all_member_insert($id){
        $name = $_POST['name'];
        $pass = $_POST['pass'];
        $email = $_POST['email'];
        $tel = $_POST['tel'];
        $addr = $_POST['addr'];
        $act = $_POST['act'];
        $sql = "INSERT INTO `member_profile` (`name`,`pass`,`email`,`tel`,`addr`,`act`) VALUES ('$name','$pass','$email','$tel','$addr','$act')";
        $stmt=$this->conn->prepare($sql);
        $result=$stmt->execute();
        if ($result) {//isset 是否存在
            $ds = $stmt->fetchAll(PDO::FETCH_ASSOC);
            $return_value['status_code'] = 0;
            $return_value['status_message'] = 'Execute Success';
            $return_value['data_set'] = $ds;
            $return_value['id'] = $id;
        } else {
            $return_value['status_code'] = -1;
            $return_value['status_message'] = 'Execute Error';
            $return_value['sql'] = $sql;
        }
        return json_encode($return_value);
     }
     public function get_all_member_update($id){
        $id = $_POST['id'];
        $name = $_POST['name'];
        $pass = $_POST['pass'];
        $email = $_POST['email'];
        $tel = $_POST['tel'];
        $addr = $_POST['addr'];
        $act = $_POST['act'];
        $sql = " UPDATE `member_profile` SET `name`='$name',`pass`='$pass',`email`='$email',`tel`='$tel',`addr`='$addr',`act`='$act' WHERE id=('$id')";              
        $stmt=$this->conn->prepare($sql);
        $result=$stmt->execute();
        if ($result) {
            $ds=$stmt->fetchAll(PDO::FETCH_ASSOC);
            $return_value['status_code'] = 0;
            $return_value['status_message'] = 'Execute Success';
            $return_value['data_set'] = $ds;
            $return_value['id'] = $id;
        } else {
            $return_value['status_code'] = -1;
            $return_value['status_message'] = 'Execute Error';
            $return_value['sql'] = $sql;
        }
        return $return_value;
        
     }
     public function get_signin($name,$pass){
        $name = $_POST['name'];
        $pass=$_POST['pass'];
        $sql = "SELECT id,name,pass,email,tel,addr,act FROM `member_profile` WHERE name='$name' AND pass='$pass'";
        $stmt=$this->conn->prepare($sql);
        $result=$stmt->execute();
        if ($name=='kuas' && $pass=='kuas') {//isset 是否存在
            $ds = $stmt->fetchAll(PDO::FETCH_ASSOC);
            $return_value['status_code'] = 0;
            $return_value['status_message'] = 'Execute Success';
            $return_value['data_set'] = $ds;
            $return_value['id'] = $id;
        } else {
            $return_value['status_code'] = -1;
            $return_value['status_message'] = 'Execute Error';
            $return_value['sql'] = $sql;
        }
        return $return_value;
    }
    
}
?>