<?php
class event_message{
    private $get=null;
    private $post=null;
    
    function __construct($get,$post){
        $this->get=$get;
        $this->post=$post;
    }
    public function getGet(){
        return $this->get;//將值return 到有呼叫這檔案的東西
    }
    public function getPost(){
        return $this->post;
    }
}
//由於網頁事件傳輸均透過GET,POST,用物件包裝,方便傳遞 加人檢查機制更為便利
//統一的閘道來接收 V傳過來的資料參數,專門把前端post過來的資料 做接收 然後用成物件給controller呼叫
//原因是post跟get參數很容易被竄改,所以統一閘道我就可以在這邊全部檢查
?>

