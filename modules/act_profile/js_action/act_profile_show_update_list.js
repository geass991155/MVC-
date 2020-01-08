class act_profile_show_update_list extends ActionHandler {
    constructor(module, action, position_id) {
        super(module, action);
        this.position_id = position_id;
    }
    prepareArgs() {
        this.php = true;
        this.php_action = 'do_select_action';
        this.addArgs('where_statement', '');
    }
    ajax_success(xhttp) {
        var json_str = xhttp.responseText;
        try {
            var obj = JSON.parse(json_str);
            if (obj['status_code'] === 0) {
                var content ="編號 活動 日期 地點<br>";
                var ds = obj['data_set'];
                console.log(obj['data_set']);
                for (var index in ds) {
                    content += `<input type='radio' name='update'  value='`
                    content += ds[index]['id'];
                    content += `'>`;
                    content += ds[index]['actname'] + ' ' + ds[index]['date'] + ' ' + ds[index]['place'];
                    //index為索引,0時就有id name email
                    content += '<br>';
                }
                content += `<br><input type="button" onclick = '(new act_profile_show_update_page("act_profile", "show_update_page", "show_area")).run()' value="確定">`;
                this.loadModuleScript(this.module, "show_update_page");
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