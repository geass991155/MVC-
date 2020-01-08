<?php
require_once 'PDO_mysql.php';
    abstract class model{
        protected $conn=null;//conn連結(在PDO_mysql.php)給於空值便能傳值
        public function __construct(){
            $this->conn=PDO_mysql::getConnection();//取得PDO 的方法
        }
    }
    //::與->的作用相同，只不過使用的對象不一样！::引用類里面的靜態方法或者數性，而且不需要實例化！
?>