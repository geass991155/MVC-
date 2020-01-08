<?php
require_once 'include/php/Module.php';
class action_dispatcher extends module {
    public function doAction(event_message $em) {
        $get = $em->getGet();
        if (isset($get['action']))
            $action = $get['action'];
        else
            $action = 'do_select_action';
        require_once "php_action/" . $action . '.php';
        $action_listener = new $action();
        $body = $action_listener->actionPerformed($em);
        return $body;
    }
}//處理php
?>

