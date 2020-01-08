<?php
require_once(__ROOT__. '/include/php/action_listener.php');
require_once(__ROOT__. '/include/php/event_message.php');
require_once(__ROOT__. '/modules/member_profile/member_profile_model.php');
class do_select_action implements action_listener {
    public function actionPerformed($em) {//在執行 2
        $id=$_POST['id'];
        $member_model=new member_profile_model();
        $return_value=$member_model->get_all_member($id);
        return json_encode($return_value);
    }
    
}

?>