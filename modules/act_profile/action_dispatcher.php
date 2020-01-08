<?php
require_once 'include/php/Module.php';
class action_dispatcher extends module {
    public function doAction(event_message $em) {
        $get = $em->getGet();//去event
        if (isset($get['action']))          //*取得action名稱
            $action = $get['action'];
        else
            $action = 'do_select_action';   //*如果沒有action名稱,給一個預設的名稱
        require_once "php_action/" . $action . '.php';  //&產生事件的傾聽者
        $action_listener = new $action();//new php_action的class    //&
        $body = $action_listener->actionPerformed($em);//加進$body裡傾聽者執行事件處理程序
        return $body;
    }
}//處理php
?>

