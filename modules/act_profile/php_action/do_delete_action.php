<?php
require_once(__ROOT__. '/include/php/action_listener.php');
require_once(__ROOT__. '/include/php/event_message.php');
require_once(__ROOT__. '/modules/act_profile/act_profile_model.php');
class do_delete_action implements action_listener {
    public function actionPerformed($em) {
        //actionPerformed做事件程序
        $post=$em->getPost();
        $id=$post['id'];
        $act_model=new act_profile_model();
        $return_value=$act_model->get_all_delect_act($id);
        return json_encode($return_value);
    }

}
?>
