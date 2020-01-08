<?php
require_once(__ROOT__. '/include/php/action_listener.php');
require_once(__ROOT__. '/include/php/event_message.php');
require_once(__ROOT__. '/modules/visitor_profile/visitor_profile_model.php');
class do_insert_action implements action_listener {
    public function actionPerformed($em) {
        $id=$_POST['id'];
        $visitor_model=new visitor_profile_model();
        $return_value=$visitor_model->get_all_visitor_insert($id);
        return json_encode($return_value);
    }
}
?>

