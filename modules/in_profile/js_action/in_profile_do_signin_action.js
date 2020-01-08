class in_profile_do_signin_action extends ActionHandler {
    constructor(module, action, position_id) {
        super(module, action);
        this.position_id = position_id;
    }
     prepareArgs() {
        this.php = true;
        //this.php_action='do_signin_action';
        var a = document.getElementsByName('user');//page那的name抓取值
        var row =['name','pass'];
        this.addArgs(row[0],a[0].value);
        this.addArgs(row[1],a[1].value);
        /*for (var i = 0; i < name.length; i++) {
            this.addArgs(row[i],name[i].value);
        }*/
        console.log(row[0],a[0].value);
     }
    ajax_success(xhttp) {//後執行 3
        var json_str = xhttp.responseText;
        var obj = JSON.parse(json_str);
        try{
            //var obj = JSON.parse(json_str);
            console.log(json_str);
            console.log(obj);
            console.log(obj['data_set']);
            if (obj['status_code'] === 0) {
                var content='成功<br>';
                    content+=`<input type = 'button' value = '點我進' onclick = "(new in_profile_show_management_page('in_profile', 'show_management_page', 'all')).run()">`
                    ;
                document.getElementById(this.position_id).innerHTML = content;//postion_id抓取index中的content值
                this.loadModuleScript("in_profile", "show_management_page");//載入所抓取的onclick的檔案
            }else {
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