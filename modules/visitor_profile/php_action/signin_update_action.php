<?php session_start(); ?>
<?php
function signin_update_action() {
require_once 'mysql.inc.php';
try {
    $id = $_SESSION['id'];
    $name = $_POST['name'];
    $act = $_POST['act'];
    $addr = $_POST['addr'];
    $birth = $_POST['birth'];
    $conn = open_db();
    $sql = "UPDATE `homework_profile` SET name='$name',addr='$addr',birth='$birth',act='$act' WHERE id='$id'";
    $count = $conn->exec($sql);
    if ($count < 1) {
        $msg = "失敗";
    } else {
        $msg = "成功";
    }
    $body = <<<EOT
            <font color="#0e664b"><b>修改活動</b></font> <br>  
            <a href="index.php?action=signin">個人活動查詢</a> 
            <a href="index.php?action=show_index_page">回首頁</a>
    $msg
EOT;
        return $body;
    
} catch (Exception $exc) {
    echo $exc->getMessage();
}
}
?>