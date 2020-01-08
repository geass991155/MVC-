<?php
require_once(__ROOT__. '/include/php/action_listener.php');
require_once(__ROOT__. '/include/php/event_message.php');
require_once(__ROOT__. '/modules/member_profile/member_profile_model.php');
class do_signin_action implements action_listener {
     public function actionPerformed($em) {
        $name=$_POST['name'];
        $pass=$_POST['pass'];
        $member_model=new member_profile_model();
        $return_value=$member_model->get_signin($name,$pass);
        return json_encode($return_value);
        
    }
}
?>






