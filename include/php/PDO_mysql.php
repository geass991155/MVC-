<?php
class PDO_mysql {

    static $db_host ='db.mis.kuas.edu.tw';
    static $db_name='s1105137142' ;
    static $db_user ='s1105137142';
    static $db_password='D222979019';
    
    static function getConnection(){
        $dsn=  sprintf("mysql:host=%s;dbname=%s;charset=utf8",self::$db_host,self::$db_name);
        //連接資料庫要組的字串，把帳號密碼、Database都設定好 建立連線
        try{
            $conn=new PDO($dsn,  self::$db_user,  self::$db_password);
            return $conn;//return到...
            
        } catch (Exception $ex) {
            echo $e->getMessage;

        }
    }
    //用物件方式連接資料庫
}

?>
