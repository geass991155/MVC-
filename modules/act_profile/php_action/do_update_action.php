<?php
require_once(__ROOT__. '/include/php/action_listener.php');
require_once(__ROOT__. '/include/php/event_message.php');
require_once(__ROOT__. '/modules/act_profile/act_profile_model.php');
class do_update_action implements action_listener {
    public function actionPerformed($em) {
        $id=$_POST['id'];
        $act_model=new act_profile_model();
        $return_value=$act_model->get_all_update_act($id);
        return json_encode($return_value);
        
       
    }

}
?>

