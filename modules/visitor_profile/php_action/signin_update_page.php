<?php session_start(); ?>
<?php
require_once 'mysql.inc.php';
function signin_update_page() {
    try {
        $id=$_SESSION['id'];
        $conn = open_db();
        $sql = "SELECT * FROM `homework_profile` WHERE id='$id'";
        $stmt = $conn->query($sql);
        $datast = $stmt->fetchAll();
        $name = $datast[0]['name'];
        $addr = $datast[0]['addr'];
        $birth = $datast[0]['birth'];
        $act = $datast[0]['act'];
        $body = <<<EOT
       <form action=index.php?action=signin_update_action method="post">
            <input type="hidden" name="id" value=$id>
            姓名：<input type="text" name="name" value=$name><br/>
            住址：<input type="text" name="addr" value=$addr><br/>
            生日：<input type="text" name="birth" value=$birth><br/>
            活動：<select name="act" value=$act>
                            <option value="阿勃勒攝影展">阿勃勒攝影展</option>
                            <option value="淨灘志工活動">淨灘志工活動</option>
                            <option value="燕巢採芭樂遊">燕巢採芭樂遊</option>
                            <option value="游泳渡日月潭">游泳渡日月潭</option>
                            <option value="清水斷涯攀爬">清水斷涯攀爬</option>
                  </select>     
            <input type="submit" value="送出">
        </form>
                <a href="index.php?action=show_index_page">回首頁</a>
      
EOT;
        return $body;
    } catch (Exception $exc) {
        echo $exc->getTraceAsString();
    }
}

?>


