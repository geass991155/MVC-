<?php
require_once(__ROOT__. '/include/php/action_listener.php');
require_once(__ROOT__. '/include/php/event_message.php');
require_once(__ROOT__. '/modules/in_profile/in_profile_model.php');
class do_signinmu_action implements action_listener {
     public function actionPerformed($em) {
        $name=$_POST['name'];
        $pass=$_POST['pass'];
        $in_model=new in_profile_model();
        $return_value=$in_model->get_signinmu($name,$pass);
        return json_encode($return_value);
        
    }
}
?>






