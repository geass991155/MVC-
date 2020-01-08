<?php

require_once 'include/php/action_listener.php';
require_once 'include/php/event_message.php';

class do_insert_action implements action_listener {

    public function actionPerformed($em) {
        $conn = PDO_mysql::getConnection();
        $post = $em->getPost();
        
        $name = $post['name'];
        $email = $post['email'];
        $tel = $post['tel'];
        
        $addr = $post['addr'];
        $sql = "INSERT INTO `member_profile` (`name`,`email`,`tel`,`addr`) VALUES ('$name','$email','$tel','$addr')";
        $stmt = $conn->exec($sql);
        if (isset($name)) {//isset 是否存在
            $return_value['status_code'] = 0;
            $return_value['status_message'] = 'Execute Success';
            $return_value['data_set'] = $id;
            $return_value['data_set'] = "成功";
        } else {
            $return_value['status_code'] = -1;
            $return_value['status_message'] = 'Execute Error';
            $return_value['sql'] = $sql;
        }
        return json_encode($return_value);
        
    }

}
?>

