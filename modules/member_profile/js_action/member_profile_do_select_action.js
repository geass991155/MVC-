class member_profile_do_select_action extends ActionHandler {
    constructor(module, action, position_id) {
        super(module, action);
        this.position_id = position_id;
    }
    prepareArgs() {//先執行的 1       
        this.php = true;
        this.addArgs('where_statement', '');
    }
    ajax_success(xhttp) {//後執行 3
        var json_str = xhttp.responseText;
        try {
            var obj = JSON.parse(json_str);
            console.log(obj['id']);
            console.log(obj['data_set']);
            if (obj['status_code'] === 0) {
                var content = '編號 帳號 密碼 email 電話 住址 參加<br>';
                var ds = obj['data_set'];
                for (var index in ds) {
                    content += ds[index]['id'] + ' ' + ds[index]['name']+ ' ' + ds[index]['pass'] + ' ' + ds[index]['email'] + ' ' + ds[index]['tel'] + ' ' + ds[index]['addr']+ ' ' + ds[index]['act'];
                    //index為索引,0時就有id name email
                    content += '<br>';
                }
                document.getElementById(this.position_id).innerHTML = content;
            } else {
                document.getElementById(this.position_id).innerHTML = obj['status_message'];
            }
        } catch (e) {
            var msg = e + "<br>";
            msg += "JSON String: " + json_str;
            document.getElementById(this.position_id).innerHTML = msg;
        }
    }
    ajax_error(msg) {
        document.getElementById(this.position_id).innerHTML = msg.status;
    }
}


