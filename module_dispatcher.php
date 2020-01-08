<?php

    //先module_dispather去連結config.json進入資料庫
    require_once 'include/php/event_message.php';
    require_once 'include/php/PDO_mysql.php';
    define('__ROOT__', dirname(__FILE__));//定義根目錄(最底層) 可記住系統的根目錄
    $body=(new Main())->run();//new 自己 去到run()執行
    echo $body;
    class Main{
        private $module;
        public function _construct(){//成是一進來先做1
            $string=file_get_contents("config.json");//連結config.json檔輸入帳密位子等
            //file_get_content函數整個文件讀成一個字串
            $config=  json_decode($string,true);//json_decode 對JSON格是字串編碼 json_encode  
            PDO_mysql::$db_host = $config["db"]["db_host"];         
            PDO_mysql::$db_name = $config["db"]["db_name"];                         
            PDO_mysql::$db_user = $config["db"]["db_user"];            
            PDO_mysql::$db_password = $config["db"]["db_password"];
            $this->module = $config["default_module"];
        }   
        public function run(){
            if(isset($_GET['module']))//如果run有被定義值
                $module=$_GET['module'];//那所抓到的值被存入$module
            else
                $module='sample_module';
            
            require_once "modules/".$module.'/action_dispatcher.php';//引用到$module不同的action_dispatcher.php
            $module_object=new action_dispatcher();//new class
            $event_message=new event_message($_GET,$_POST);//new event的class 用get或是post
            $body = $module_object->doAction($event_message);//用action_dispatcher的fun將值存入$body
            return $body; //先進到action_dispatcher
            }
        
        }//處理moduley在與action_dispatcher.php
?>