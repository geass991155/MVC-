class act_profile_show_delete_list extends ActionHandler {
    constructor(module, action, position_id) {//抓住management_page.js各button的檔案
        super(module, action);//super呼叫父類別中的建構子
        this.position_id = position_id;//
    }
    prepareArgs() {
        this.php = true;
        this.php_action = 'do_select_action';
        this.addArgs('where_statement', '');
    }
    ajax_success(xhttp) {//do_select_action 成功進入ajax_success
        var json_str = xhttp.responseText;//
        try {//執行資料庫是否正確
            var obj = JSON.parse(json_str);//將輸入得的東西轉換成物件
            if (obj['status_code'] === 0) {
                var content = "編號 名稱 日期 地點 <br>";
                var ds = obj['data_set'];
                for (var index in ds) {
                    content += `<input type='radio' name='select'  value='`
                    content += ds[index]['id'];
                    content += `'>`;
                    content += ds[index]['actname'] + ' ' + ds[index]['date'] + ' ' + ds[index]['place'];
                    //index為索引,0時就有id name email
                    content +=`<br>`;
                }

                content += `<br><input type='button' value='刪除活動' onclick = "(new act_profile_do_delete_action('act_profile', 'do_delete_action', 'show_area')).run()"><br>
                            `;
                this.loadModuleScript(this.module, "do_delete_action");
                document.getElementById(this.position_id).innerHTML = content;//顯示查詢的東西
            } else {
                document.getElementById(this.position_id).innerHTML = obj['status_message'];
            }
        } catch (e) {//不正確顯示
            var msg = e + "<br>";
            msg += "JSON String: " + json_str;
            document.getElementById(this.position_id).innerHTML = msg;
        }
    }
    ajax_error(msg) {
        document.getElementById(this.position_id).innerHTML = msg.status;
    }

}