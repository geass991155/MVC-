<?php
require_once 'include/php/model.php';
    class act_profile_model extends model{
        public function __construct(){
        parent:: __construct();
        }
         //ACT
      public function get_all_act($id){
        $sql="SELECT id,actname,date,place FROM act_profile";
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
    public function get_all_insert_act($id){
        $actname = $_POST['actname'];
        $date = $_POST['date'];
        $place = $_POST['place'];
        
        $sql = "INSERT INTO `act_profile` (`actname`,`date`,`place`) VALUES ('$actname','$date','$place')";
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
      public function get_all_delect_act($id){
        $sql = "DELETE FROM `act_profile` WHERE id='$id'";
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
     public function get_all_update_act($id){
        $id = $_POST['id'];
        $actname = $_POST['actname'];
        $date = $_POST['date'];
        $place = $_POST['place'];
        $sql = " UPDATE `act_profile` SET `actname`='$actname',`date`='$date',`place`='$place' WHERE id=('$id')";              
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
    }
?>